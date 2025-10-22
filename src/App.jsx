import React, { useState , useEffect} from 'react'
import Search from './components/Search.jsx'
import Spinner from './components/Spinner.jsx';
import Card from './components/card.jsx';
import { useDebounce } from 'react-use';
const API_BASE_URL='https://api.themoviedb.org/3';

const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method : 'GET',
  headers : {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {

  const [searchTerm,setSearchTerm] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const [movieList,setMovieList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [deBouncedSearchTerm,setDebouncedSearchTerm] = useState('');
  

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try{
      const endPoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : 
      `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endPoint, API_OPTIONS);
      
      if(!response.ok){
        throw new Error(`Failed to fetch movies`)
      }
      const data = await response.json();
      console.log(data);

      if(data.Response === false){
        setErrorMessage(data.Error || 'failed to fetch movies')
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    }

    catch (e) {
      console.error(`Error fetching movies ${e}`);
      setErrorMessage(`Error in fetching Data ${e}`);
    }

    finally{
      setIsLoading(false);
    }
  }
  

  useEffect(()=>{fetchMovies(deBouncedSearchTerm)},[deBouncedSearchTerm]);
  
  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero.png" />
          <h1>Find any <span className='text-gradient'>Movie</span>, Read its <span className='text-gradient'>Story</span>, Enjoy It.</h1>
          
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <section className="all-movies">
          <h2 className='mt-[50px]'>All Movies</h2>


          {/* {errorMessage && <p className='text-red-500 text-2xl'>{errorMessage}</p>} */}
          
          {isLoading ? (<Spinner />) : errorMessage ? (<p className='text-red-500'>{errorMessage}</p>) :
          (<ul>
            {
              movieList.map((movie) => (
                <Card key={movie.id} movie={movie}/>
              ))
            }
          </ul>)}

        </section>

      </div>
    </main>

  )
}

export default App