import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.pokemons.map( (value, index) => {
          return (
            <p onClick={this.props.removePoke.bind(null, index)} key={value.id}>{value.pokemon}</p>
          )
        })}
      </div>
    )
  }
})
