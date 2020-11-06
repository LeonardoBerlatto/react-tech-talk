import React from 'react'
import { MovieCard } from '../../components';
import './MovieList.scss'

export const MovieList = ({ movies }) => {

  const renderMovies = () => movies.map((movie,key) => {
    return <MovieCard name={movie.name} key={key} imageUrl={movie.imageUrl} />
  });

  return (
    <div className="movie-list ">
      {renderMovies()}
    </div>
  )
}
