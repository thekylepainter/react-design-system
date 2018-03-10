import React from 'react'

import AppNav from './app/AppNav'
import AppHeader from './app/AppHeader'
import AppMain from './app/AppMain'
import './App.css'

const App = () => (
    <React.Fragment>
        <nav>
            <div className="home">
                <h1 className="f--bold">Home</h1>
            </div>
            <div>
                <AppNav/>
            </div>
        </nav>

        <AppHeader/>
        {/*<section className="rds-tabs">*/}
            {/*<section>*/}
                {/*<Link className="f-h4 active" to="/components">Tab One</Link>*/}
                {/*<Link className="f-h4" to="/layout">Tab Two</Link>*/}
                {/*<Link className="f-h4" to="/style">Tab Three</Link>*/}
            {/*</section>*/}
        {/*</section>*/}
        {/*<aside>*/}
            {/*<section>*/}
                {/*<p>*/}
                    {/*Wayfarers edison bulb tilde, jean shorts 3 wolf moon iceland trust fund bitters ugh fixie hot chicken ethical helvetica. Adaptogen listicle everyday carry chicharrones messenger bag selfies VHS pitchfork. Tofu cardigan whatever, godard blue bottle keffiyeh roof party humblebrag +1 lyft authentic tousled vaporware. Pour-over cliche marfa gentrify craft beer trust fund shabby chic PBR&B biodiesel meh plaid microdosing dreamcatcher XOXO chia. Banh mi retro thundercats kitsch meggings asymmetrical gentrify twee. Pok pok plaid occupy tousled viral wolf.*/}
                    {/*<br/><br/>Iceland vexillologist intelligentsia franzen vegan prism gochujang ramps. Lyft pickled try-hard roof party XOXO plaid typewriter unicorn slow-carb skateboard. Portland farm-to-table disrupt, occupy lo-fi meggings shabby chic. Whatever blue bottle hot chicken deep v.*/}
                {/*</p>*/}
            {/*</section>*/}
        {/*</aside>*/}
        <AppMain/>
    </React.Fragment>
);

export default App