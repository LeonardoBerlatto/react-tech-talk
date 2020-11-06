import React from "react";
import { SearchBar } from '../../components';
import { MovieList } from '../../containers/movie-list/MovieList';
import './MoviesScreen.scss'


import movies from '../../assets/database.json'

export const MoviesScreen = () => {

  return (
    <div className='movie-screen'>
      <MovieList movies={movies} />
    </div>
  );
}
