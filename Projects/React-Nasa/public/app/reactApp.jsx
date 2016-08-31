import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import Alderaan from './component/alderaan/alderaan.jsx';
import Leia from './component/alderaan/leia.jsx';

var App = React.createClass({
	render() {
		return (
			<div>
				<p>Starwars API - Routes</p>
				<Router>
					<Route path="alderaan" component={Alderaan}>
						<Route path="leia" component={Leia}></Route>
					</Route>
				</Router>
			</div>
		)
	}
});

ReactDOM.render(
	<App/>, document.getElementById('app'));
