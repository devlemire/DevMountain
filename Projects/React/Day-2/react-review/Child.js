import React from 'react';

export default React.createClass({
  getInitialState() {
    return({
      temp: ''
    })
  },
  render() {
    return (
      <div>
        <input onChange={this.storeName} type="text" />
        <button onClick={this.props.setDisplay.bind(null, this.state.temp)}>Set Display</button>
      </div>
    )
  },
  storeName(e) {
    this.setState({
      temp: e.target.value
    })
  }
})
