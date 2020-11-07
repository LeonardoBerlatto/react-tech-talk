import React from 'react'
import { MovieCard } from '..';
import './MovieList.scss'

export const MovieList = ({ movies }) => {

  const renderMovies = () => movies.map((movie, key) => {
    return <MovieCard name={movie.name} imageUrl={movie.imageUrl} available={movie.available} key={key} />
  });

  return (
    <div className="movie-list ">
      {renderMovies()}
    </div>
  )
}
