import React from 'react';
import ReactDOM from 'react-dom'; //One time import on the main app file

var App = React.createClass({
  getInitialState() {
    return ({
      name: 'James',
      tempName: '',
      list: ["1", "2", "3"]
    })
  },
  render() {
    return (
      <div>
        <div onClick = {this.handleClick}>
          Hello World
          {this.state.name}
        </div>
        <input onChange={this.handleChange}/>
        {this.state.list.map(value => {
          return (
            <div key={value}>{value}</div>
          )
        })}
      </div>
    )
  },
  handleClick() {
    this.setState({
      name: this.state.tempName
    })
  },
  handleChange(event) {
    this.setState({
      tempName: event.target.value
    })
  }
});

ReactDOM.render(<App />, document.getElementById("app")); //Based off our var App name
