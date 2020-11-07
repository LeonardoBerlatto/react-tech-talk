import React from 'react'
import './MovieCard.scss'

export const MovieCard = ({ name, imageUrl, available }) => {
  return (
    <div className={`movie ${available ? 'blue' : 'red'}`}>
      <img src={imageUrl} alt="" />
      <span>{name}</span>
    </div>
  )
}
