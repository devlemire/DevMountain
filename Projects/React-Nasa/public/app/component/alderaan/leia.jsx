import React from 'react';
import axios from 'axios';

export default React.createClass({
	getInitialState() {
		return ({leiaInfo: ''})
	},
	componentWillMount() {
		axios.get(`http://swapi.co/api/people/5`).then(r => {
			this.setState({leiaInfo: r.data});
		})
	},
	render() {
		return (
			<div>
				<img src="./app/component/alderaan/leia.jpg"></img>
				<p>Name: {this.state.leiaInfo.name}</p>
			</div>
		)
	}
})
