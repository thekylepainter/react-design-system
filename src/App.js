import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

import Components from './app/Components'
import Styles from './app/Styles'
import './App.css'

require.context('./fonts');

const App = () => (
    <Router>
        <React.Fragment>
            <nav>
                <NavLink to="/" exact><span>Home</span></NavLink>
                <NavLink to="/components"><span>Components</span></NavLink>
                <NavLink to="/styles"><span>Styles</span></NavLink>
            </nav>

            <Route path="/components" component={Components}/>
            <Route path="/styles" component={Styles}/>
        </React.Fragment>
    </Router>
);

export default App