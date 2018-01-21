import React from 'react'
import {
    Route,
    NavLink
} from 'react-router-dom'

import Typography from './styles/Typography'

const styles = [
    {
        path: '/typography',
        name: 'Typography',
        component: Typography
    }
];

const Styles = ({match}) => (
    <React.Fragment>
        <ul className="rds-sidebar">
            {styles.map(style => (
                <li key={style.name}>
                    <NavLink to={match.url + style.path}>
                        {style.name}
                    </NavLink>
                </li>
            ))}
        </ul>

        <section className="rds-content">
            <Route exact path={match.url} render={() => (
                <React.Fragment>
                    <h3>Styles</h3>
                    <p>Please select a style.</p>
                </React.Fragment>
            )}/>

            {styles.map(style => (
                <Route key={style.name} path={match.url + style.path} component={style.component}/>
            ))}
        </section>
    </React.Fragment>
);

export default Styles