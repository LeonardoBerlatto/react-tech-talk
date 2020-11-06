import React, { useState } from "react";
import { MovieList, Header } from '../../containers';

import './MoviesScreen.scss'


import moviesData from '../../assets/database.json'

export const MoviesScreen = () => {

  const [movies, setMovies] = useState(moviesData);

  const filterMovies = (text) => {
    const filteredMovies = moviesData.filter((movie) => movie.name.startsWith(text))
    setMovies(filteredMovies);
  }

  return (
    <div className='movie-screen'>
      <Header onSearch={filterMovies} />
      <MovieList movies={movies} />
    </div>
  );
}
