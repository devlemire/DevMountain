import React from 'react';
import Child from './Child.js';
import Map from './Map.js';

export default React.createClass({
  getInitialState() {
    return({
      name: 'James',
      list: [1,2,3,4,5]
    })
  },
  render() {
    return (
      <div className="myClass" style={{width: "500px", background: "red"}}>
        <p ref={ (ref) => this.nameTitle = ref }>Name Changer</p>
        <p> Name: {this.state.name}</p>
        <Child setDisplay={this.changeName} />
        <Map theList={this.state.list} />
      </div>
    )
  },
  changeName(value) {
    console.log(this.nameTitle);
    this.setState({
      name: value
    })
  }
});
