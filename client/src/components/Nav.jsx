var React = require('react');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      addMovie: ''
    }
  }

  handleInputChange(event) {
    var newState = {};
    if(event.target.id === "searchMovie") {
      var searchedMovie = event.target.value.toLowerCase();
      newState[event.target.id] = searchedMovie;
      this.props.searchMovieList(newState.searchMovie);
    } else {
      var addedMovie = event.target.value.toLowerCase();
      newState[event.target.id] = addedMovie;
    }
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <input id="searchMovie" type="text" onChange={this.handleInputChange.bind(this)}></input>
        <input id="addMovie" type="text" onChange={this.handleInputChange.bind(this)}></input>
        <button>addMovie</button>
      </div>
    )
  }
}

export default Nav;