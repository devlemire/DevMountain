import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import Alderaan from './components/alderaan.js';
import Character from './components/character.js';

var App = React.createClass({
  render() {
    return (
      <div>
        <p>Starwars API - Routes</p>
        <Router>

          <Route path="alderaan" component="Alderaan">
            <Route path="character" component="Character"></Route>
          </Route>

        </Router>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
