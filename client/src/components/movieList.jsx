var React = require('react');
import MovieListEntry from './movieListEntry.jsx';

var MovieList = ({movies, watchSearchStatus}) => {
  return (
    <div>
    {movies.map((movie) => {
      return movie.searched ? <MovieListEntry watchSearchStatus={watchSearchStatus} key={movie.id} movie={movie}/> : null;
    })}
    </div>
  );
}

export default MovieList;
