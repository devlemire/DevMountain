import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render() {
    return (
      <div>
        <p>Add pokemon</p>
        <input value={this.state.inputVal} type="text" />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
