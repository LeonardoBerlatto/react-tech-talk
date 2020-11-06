import React, { useState } from "react";
import { Header } from '../../containers';
import { MovieList } from '../../components';

import moviesData from '../../assets/database.json'


import './MoviesScreen.scss'


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
