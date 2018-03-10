import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Typography from './styles/Typography'

const Styles = ({match}) => (
    <React.Fragment>
        <Switch>
            <Route exact path={match.url} render={() => (
                <p>Please select a style.</p>
            )}/>

            {route.routes.map(route => (
                <Route key={route.title} path={match.url + route.path} component={route.component}/>
            ))}
        </Switch>
    </React.Fragment>
);

const route = {
    path: '/styles',
    title: 'Styles',
    component: Styles,
    routes: [
        {
            path: '/typography',
            title: 'Typography',
            component: Typography
        }
    ]
};

export default route