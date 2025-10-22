# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Accept API key as build argument
ARG VITE_TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGM1OTUzMDdjN2VjNDZiNzZkYTNlNDVhNTNlYjI3MiIsIm5iZiI6MTc2MTA0NTA2Ny40NTUwMDAyLCJzdWIiOiI2OGY3NmE0YjBjYjRjNDI4ZjRmNWM3MmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0kmaMZVrDosm1TXUaNX81VxWfuDPxZDRVPZSk9z96ns

# Set it as environment variable for Vite
ENV VITE_TMDB_API_KEY=$VITE_TMDB_API_KEY

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Vite app (API key gets baked in here)
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy the built files to nginx (Vite uses 'dist' folder)
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]