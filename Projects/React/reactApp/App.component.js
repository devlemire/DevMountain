import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  getInitialState() {
    return({
      inputVal: "",
      tasks: []
    })
  },
  render() {
    return (
      <div>
        <p>Tasks</p>
        {this.state.tasks.map((value, index) => {
          return (
            <div
              key={index}
              onClick={this.handleRemove.bind(this, index)}
            >
              {value}
            </div>
          )
        })}
        <input
          value={this.state.inputVal}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Task</button>
      </div>
    )
  },
  handleRemove(removeIndex) {
    this.setState({
      tasks: this.state.tasks.filter((value, index) => index !== removeIndex)
    })
  },
  handleChange(event) {
    this.setState({
      inputVal: event.target.value
    })
  },
  handleClick() {
    this.setState({
      tasks: this.state.tasks.concat([this.state.inputVal]),
      inputVal: ""
    })
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
