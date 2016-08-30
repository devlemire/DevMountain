import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <p>Map</p>
        {this.props.theList.map( (value) => {
          return (
            <p key={value}>{value}</p>
          )
        })}
      </div>
    )
  }
})
