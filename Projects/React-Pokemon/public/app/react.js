import React from 'react';
import ReactDOM from 'react-dom';
import PokeList from './component/list.js';

var App = React.createClass({
  getInitialState() {
    return({
      pokemons: [],
      pokeValue: ''
    })
  },
  render() {
    return (
      <div>
        <p>Add pokemon</p>
        <input onChange={this.pokeInput} value={this.state.pokeValue} type="text" />
        <button onClick={this.addPoke}>Add Pokemon</button>
        <br></br>
        <PokeList removePoke={this.removePoke} pokemons={this.state.pokemons} />
      </div>
    )
  },
  pokeInput(e) {
    this.setState({
      pokeValue: e.target.value
    })
  },
  addPoke() {
    this.setState({
      pokemons: this.state.pokemons.concat([{id: this.state.pokemons.length - 1, pokemon: this.state.pokeValue}]),
      pokeValue: ''
    })
  },
  removePoke(removeIndex) {
    this.setState({
      pokemons: this.state.pokemons.filter( (value, index) => index !== removeIndex)
    })
  }
})

ReactDOM.render(<App />, document.getElementById('app'));
