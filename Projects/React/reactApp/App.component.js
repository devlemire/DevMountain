import React from 'react';
import ReactDOM from 'react-dom'; //One time import on the main app file

var App = React.createClass({
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
});

ReactDOM.render(<App />);
