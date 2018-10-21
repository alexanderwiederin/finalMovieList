var React = require('react');
var ReactDOM = require('react-dom');

import MovieList from './components/movieList.jsx';
import Nav from './components/nav.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
      {title: 'Mean Girls', searched: true},
      {title: 'Hackers', searched: true},
      {title: 'The Grey', searched: true},
      {title: 'Sunshine', searched: true},
      {title: 'Ex Machina', searched: true}]
    };

    this.searchMovieList = this.searchMovieList.bind(this);

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
          <Nav searchMovieList={this.searchMovieList}/>
        </div>
        <div>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));