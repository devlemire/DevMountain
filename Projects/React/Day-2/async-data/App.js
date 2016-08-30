import React from "react";
import Display from "./Display";
import axios from 'axios';

export default React.createClass({
	getInitialState() {
		return ({

		})
	},
	render() {
		return (
			<div>
				<input onKeyDown={this.handleSubmit}/>
				<img src={this.state.pokemon} />
			</div>
		)
	},
	handleSubmit(e) {
		if (e.keyCode === 13) {
			axios({
				method: 'GET',
				url: `http://pokeapi.co/api/v2/pokemon/${e.target.value}`
			}).then( (result) => {
				this.setState({
					pokemon: result.data.sprites.front_shiny
				})
			})
		}
	}
});
