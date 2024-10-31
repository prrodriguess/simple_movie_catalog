import React from 'react';
import { Movie } from '../App'; // Corrigido para '../types/Movie'


interface MovieItemProps {
  movie: Movie;
  showDetails: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, showDetails }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
    <h3>{movie.title} ({movie.releaseYear})</h3>
    <p>Gênero: {movie.genre}</p>
    {showDetails && <p>Descrição: {movie.description}</p>}
  </div>
);

export default MovieItem;
