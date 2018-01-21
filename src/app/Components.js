import React from 'react'
import {
    Route,
    NavLink
} from 'react-router-dom'

import ButtonDemo from './examples/ButtonDemo'
import DropdownDemo from './examples/DropdownDemo'

const components = [
    {
        path: '/button',
        name: 'Button',
        component: ButtonDemo
    },
    {
        path: '/dropdown',
        name: 'Dropdown',
        component: DropdownDemo
    }
];

const Components = ({match}) => (
    <React.Fragment>
        <ul className="rds-sidebar">
            {components.map(component => (
                <li key={component.name}>
                    <NavLink to={match.url + component.path}>
                        {component.name}
                    </NavLink>
                </li>
            ))}
        </ul>

        <section className="rds-content">
            <Route exact path={match.url} render={() => (
                <React.Fragment>
                    <h3>Components</h3>
                    <p>Please select a component.</p>
                </React.Fragment>
            )}/>

            {components.map(component => (
                <Route key={component.name} path={match.url + component.path} component={component.component}/>
            ))}
        </section>
    </React.Fragment>
);

export default Components