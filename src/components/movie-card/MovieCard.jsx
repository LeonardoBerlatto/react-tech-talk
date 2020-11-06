import React from 'react'
import './MovieCard.scss'

export const MovieCard = ({ name, imageUrl }) => {
  return (
    <div className="movie">
      <img src={imageUrl} alt="" />
      <span>{name}</span>
    </div>
  )
}
