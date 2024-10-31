import React, { Component } from 'react';
import MovieItem from './components/MovieItem';
// import { Movie } from './types/movies';
import './App.css';

export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  genre: string;
  description: string;
}

interface AppState {
  movies: Movie[];
  showDetails: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      movies: [
        { id: 1, title: 'Lord of The Rings', releaseYear: 2004, genre: 'Action', description: 'The most famous move ever' },
        { id: 2, title: 'Interstellar', releaseYear: 2014, genre: 'Science', description: 'Journey through the space and time' },
        { id: 3, title: 'Kingsman - Secret Service', releaseYear: 2014, genre: 'Action', description: 'Agents with responsability to save the world against of most dangerous enemies' }
      ],
      showDetails: false
    };
  }

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    return (
      <div>
        <h1>Catálogo de Filmes</h1>
        <button onClick={this.toggleDetails}>
          {this.state.showDetails ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
        </button>
        <div>
          {this.state.movies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              showDetails={this.state.showDetails}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
