import React from "react";
import Child from './Child.js';

export default React.createClass({
	getInitialState() {
		return {
			visible: false
		}
	},
	componentWillMount() {
		console.log('will mount - parent');
	},
	componentDidMount() {
		console.log('mounted - parent');
	},
	render() {
		return (
			<div>
				<button onClick={this.onOff}>Show/Hide Child</button>
				{this.state.visible ? <Child /> : null}
			</div>
		)
	},
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
})
