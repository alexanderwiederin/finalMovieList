var React = require('react');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      addedMovie: ''
    }
  }

  handleInputChange(event) {
    var newState = {};
    var searchedMovie = event.target.value.toLowerCase();
    newState[event.target.id] = searchMovie;
    this.props.searchMovieList(searchedMovie);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <input id="searchMovie" type="text" onChange={this.handleInputChange.bind(this)}></input>
      </div>
    )
  }
}

export default Nav;