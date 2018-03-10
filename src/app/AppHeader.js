import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { routes } from "./AppNav"

class AppHeader extends Component {
    render() {
        return <header>
            <h1>
                {routes.map(appRoute => (
                    <Route key={appRoute.title} path={appRoute.path} render={({match}) => (
                        <React.Fragment>
                            {appRoute.title}
                            {appRoute.routes.map(nestedRoute => (
                                <Route key={nestedRoute.title} path={match.url + nestedRoute.path} render={() => (
                                    <React.Fragment>
                                        &nbsp;- {nestedRoute.title}
                                    </React.Fragment>
                                )}/>
                            ))}
                        </React.Fragment>
                    )}/>
                ))}
            </h1>
        </header>
    }
}

export default AppHeader