import React from "react";

export default React.createClass({
	componentWillMount() {
		console.log('will mount - child');
	},
	componentDidMount() {
		console.log('mounted - child');
	},
	render() {
		return (
			<h1>Child Component</h1>
		)
	}
})
