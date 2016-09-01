import React from 'react';
import Planets from '../planets/planets.jsx';
import { Link, browserHistory } from 'react-router';

export default React.createClass({
	getInitialState() {
		return ({
      planets: Planets,
      selectedLink: 'test'
    })
	},
	render() {
		return (
			<div>
				<p className="pb-title">Planet Browser</p>
        <p>{this.state.selectedLink}</p>
        <select className="planet-selector">
          {this.state.planets.map( (value, index) => {
            return (
              <option onChange={this.handleChange} key={index} value={value.name.toLowerCase()}>{value.name}</option>
            )
          })}
        </select>
			</div>
		)
	},
  handleChange(e) {
    this.setState({
      selectedLink: e.target.value
    })
  }
})
