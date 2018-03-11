import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ButtonDemo from './examples/ButtonDemo'
import DropdownDemo from './examples/DropdownDemo'
import FormDemo from './examples/FormDemo'

const Components = ({match}) => (
    <React.Fragment>
        <Switch>
            <Route exact path={match.url} render={() => (
                <p>Please select a component.</p>
            )}/>

            {route.routes.map(route => (
                <Route key={route.title} path={match.url + route.path} component={route.component}/>
            ))}
        </Switch>
    </React.Fragment>
);

const route = {
    path: '/components',
    title: 'Components',
    component: Components,
    routes: [
        {
            path: '/button',
            title: 'Button',
            component: ButtonDemo
        },
        {
            path: '/dropdown',
            title: 'Dropdown',
            component: DropdownDemo
        },
        {
            path: '/form',
            title: 'Form',
            component: FormDemo
        }
    ]
};

export default route