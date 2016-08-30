import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
  getInitialState() {
    return({
      
    })
  },
  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
