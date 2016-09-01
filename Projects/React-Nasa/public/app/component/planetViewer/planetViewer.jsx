import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
      <p> {this.props.img} </p>
      <p> {this.props.name} </p>
      </div>
    )
  }
})
