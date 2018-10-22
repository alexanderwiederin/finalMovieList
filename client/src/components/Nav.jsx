var React = require('react');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      addMovie: '',
      watched: null
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

  handleSubmit() {
    this.props.addMovie(this.state.addMovie);
  }

  handleWatchStatusChange() {
    if (this.state.watched) {
      this.props.toggleWatchStatusSearch(null);
      this.setState({watched: null});
    } else {
      this.props.toggleWatchStatusSearch(true);
      this.setState({watched: true});
    } 
  }

  handleToWatchStatusChange() {
    if (this.state.watched || this.state.watched === null) {
      this.props.toggleWatchStatusSearch(false);
      this.setState({watched: false});
    } else {
      this.props.toggleWatchStatusSearch(null);
      this.setState({watched: null});
    } 
  }


  render() {
    return (
      <div>
        <div>
          <input id="searchMovie" type="text" onChange={this.handleInputChange.bind(this)}></input>
          <input id="addMovie" type="text" onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleSubmit.bind(this)}>addMovie</button>
        </div>
        <div>
        <button onClick={this.handleWatchStatusChange.bind(this)}>Watch</button><button onClick={this.handleToWatchStatusChange.bind(this)}>To Watch</button>
        </div>
      </div>
    )
  }
}

export default Nav;