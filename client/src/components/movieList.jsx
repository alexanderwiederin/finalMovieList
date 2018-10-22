var React = require('react');
import MovieListEntry from './movieListEntry.jsx';

var MovieList = ({movies}) => {
  return (
    <div>
    {movies.map((movie) => {
      return movie.searched ? <MovieListEntry key={movie.id} movie={movie}/> : null;
    })}
    </div>
  );
}

export default MovieList;
