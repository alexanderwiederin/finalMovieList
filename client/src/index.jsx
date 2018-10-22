var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

import MovieList from './components/movieList.jsx';
import Nav from './components/nav.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      watched: null
    };

    this.getMovies = this.getMovies.bind(this);
    this.searchMovieList = this.searchMovieList.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatchStatusSearch = this.toggleWatchStatusSearch.bind(this);
  
  }

  componentDidMount() {
    this.getMovies();
  }

  toggleWatchStatusSearch(status) {
    var watched = status;
    this.setState({watched})
  }

  conformMovies(moviesArray) {
    return moviesArray.map((movie) => {
      movie.searched = true;
      return movie;
    })
  }

  getMovies() {
    $.ajax({
      url: '/movies',
      method: 'GET',
      success: (result) => {
        var movies = this.conformMovies(result);
        this.setState({movies});
      },
      error: (error) => {
        console.log('error', error);
      }
    })
  }

  addMovie(movieTitle) {
    $.ajax({
      url: '/addMovie',
      method: 'POST',
      contentType: 'text/plain',
      data: movieTitle,
      success: () => {
        this.getMovies();
      }
    })
  }

  searchMovieList(searchValue) {
    var movies = this.state.movies.slice();
    movies.map((movie) => {
      var movieTitle = movie.title.toLowerCase();
      return movieTitle.includes(searchValue) ? movie.searched = true : movie.searched = false;
    });
    this.setState({movies});
  }


  render() {
    return (
      <div className="main">
        <h1>App works</h1>
        <div>
          <Nav searchMovieList={this.searchMovieList} addMovie={this.addMovie} toggleWatchStatusSearch={this.toggleWatchStatusSearch} />
        </div>
        <div>
          <MovieList movies={this.state.movies} watchSearchStatus={this.state.watched}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));