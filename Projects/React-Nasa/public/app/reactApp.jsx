import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import PlanetBrowser from './component/planetBrowser/planetBrowser.jsx';
import PlanetViewer from './component/planetViewer/planetViewer.jsx';
import Character from './component/Character.jsx';
import Planets from './component/planets/planets.jsx';

class planetWrapper extends React.Component{
	constructor(props) {
		super(props)
		console.log('PROPS', props)
	}

	render() {
		return (
			<PlanetViewer img={this.props.route.img} name={this.props.route.path} />
		)
	}
}

var App = React.createClass({
	getInitialState() {
		return({
			planets: Planets
		})
	},
	render() {
		return (
			<div>
				<Router>
					<Route path='/' component={PlanetBrowser} />
					<Route img="x" path='hoth' component={planetWrapper} />
				</Router>

				<PlanetViewer />
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
