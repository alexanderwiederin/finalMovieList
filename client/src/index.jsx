var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };

  }

  render() {
    return (
      <div className="main">
      <h1>this works</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));