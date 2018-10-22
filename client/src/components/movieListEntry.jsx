var React = require('react');

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
    }
  }

  changeWatchStatus() {
    var watched = !this.state.watched;
    this.setState({watched})
  }

  render() {
    if(!this.state.watched) {
      return (
        <div key={this.props.movie.id}>
        <span>{this.props.movie.title}</span><button onClick={this.changeWatchStatus.bind(this)}>To Watch</button>
        </div> 
      )
    } else {
      return (
        <div key={this.props.movie.title}>
        <span>{this.props.movie.title}</span><button onClick={this.changeWatchStatus.bind(this)}>Watched</button>
        </div>
      )
    }
  }
}

export default MovieListEntry;