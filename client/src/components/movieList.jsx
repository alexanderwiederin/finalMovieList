var React = require('react');

var MovieList = ({movies}) => {
  return (
    <div>
    {movies.map((movie) => {
      return <div key={movie.title}>{movie.title}</div>
    })}
    </div>
  );
}

export default MovieList;