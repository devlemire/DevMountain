import React from 'react';
import axios from 'axios';

export default React.createClass({
	getInitialState() {
		return ({leiaInfo: ''})
	},
	componentWillMount() {
		console.log(this.props.character);
		axios.get(`http://swapi.co/api/people/${this.props.character}`).then(r => {
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
