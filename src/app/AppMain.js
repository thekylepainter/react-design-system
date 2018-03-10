import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from "./AppNav"

class AppMain extends Component {
    render() {
        return <main>
            <section>
                <Switch>
                    {routes.map(appRoute => (
                        <Route key={appRoute.title} path={appRoute.path} component={appRoute.component}/>
                    ))}
                </Switch>
            </section>
        </main>
    }
}

export default AppMain