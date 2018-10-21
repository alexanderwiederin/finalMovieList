var React = require('react');
var ReactDOM = require('react-dom');

import MovieList from './components/movieList.jsx';
import Nav from './components/nav.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}]
    };

  }

  render() {
    return (
      <div className="main">
        <h1>App works</h1>
        <div>
          <Nav />
        </div>
        <div>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));