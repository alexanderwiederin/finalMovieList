var React = require('react');

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchMovie: '',
      addedMovie: ''
    }
  }

  handleInputChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    console.log(newState);
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