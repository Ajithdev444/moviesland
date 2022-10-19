import React from 'react'
import './App.css';
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies('Batman');
  },[])

  const searchMovies = async(title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search)
  } 

 
  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search for movie'
        />
        <img 
        src={SearchIcon}
        alt='search' 
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
      <div className='container'>
        {movies.map((movie) =>{
          <MovieCard movie={movie}/>
        })}
      </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}   
    </div>
  );
};

export default App;
