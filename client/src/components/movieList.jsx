var React = require('react');

var MovieList = ({movies}) => {
  return (
    <div>
    {movies.map((movie) => {
      return movie.searched ? <div key={movie.title}>{movie.title}</div> : null;
    })}
    </div>
  );
}

export default MovieList;