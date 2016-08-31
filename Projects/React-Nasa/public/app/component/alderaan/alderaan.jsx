import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	getInitialState() {
		return ({showCharacter: false})
	},
	render() {
		return (
			<div>
				<img className="planet-image" src="./app/component/alderaan/alderaan.jpg"/>
				<p>Alderaan</p>
				<Link to="alderaan/leia">
					<p onClick={this.handleClick}>Show/Hide Character</p>
				</Link>
				{this.state.showCharacter
					? this.props.children
					: null}
			</div>
		)
	},
	handleClick() {
		this.setState({
			showCharacter: !this.state.showCharacter
		})
	}
})
