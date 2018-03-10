import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Components from './Components'
import Styles from './Styles'

// Navigation Routes
const routes = [
    Components,
    Styles
];

class AppNav extends Component {
    render() {
        return <React.Fragment>
            {routes.map(route => (
                <React.Fragment key={route.title}>
                    <NavLink className="f--bold" to={route.path}>{route.title}</NavLink>

                    {route.routes.length > 0 &&
                    <div className="nested-links">
                        {route.routes.map(nestedRoute => (
                            <NavLink key={nestedRoute.title}
                                     to={route.path + nestedRoute.path}>{nestedRoute.title}</NavLink>
                        ))}
                    </div>
                    }
                </React.Fragment>
            ))}
        </React.Fragment>
    }
}

export default AppNav
export {routes}
