var React = require('react');

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false,
    }
  }

  render() {
    if(!this.state.watched) {
      return (
        <div key={this.props.movie.id}>
        <span>{this.props.movie.title}</span><button>To Watch</button>
        </div> 
      )
    } else {
      return (
        <div key={this.props.movie.title}>
        <span>{this.props.movie.title}</span><button>Watched</button>
        </div>
      )
    }
  }
}

export default MovieListEntry;