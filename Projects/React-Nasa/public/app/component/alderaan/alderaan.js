import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <img className="planet-image" src="./app/component/alderaan/alderaan.jpg" />
        <p>Alderaan</p>
        {this.props.children}
      </div>
    )
  }
})
