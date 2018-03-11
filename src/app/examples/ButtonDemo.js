import React, { Component } from 'react';
import Button from "../../components/button/Button";

class ButtonDemo extends Component {
    render() {
        return <React.Fragment>
            <h3>Button</h3>
            <p>This component provides ways to click things and then do an action on click. Crazy right? The web is such a cool platform</p>

            <h4>Primary Buttons</h4>

            <div>
                <Button color="green"/>
                <Button color="red"/>
                <Button color="blue"/>
            </div>

            <h4>Secondary Buttons</h4>

            <div>
                <Button secondary color="green"/>
                <Button secondary color="red"/>
                <Button secondary color="blue"/>
            </div>

            <h4>Disabled Buttons</h4>

            <div>
                <Button disabled color="green"/>
                <Button disabled color="red"/>
                <Button disabled color="blue"/>
                <Button disabled secondary/>
            </div>

            <h4>Inputs</h4>

            <div>
                <input type="text" placeholder="Placeholder" />
                <input disabled type="text" placeholder="Placeholder" />
                <input className="invalid" type="text" placeholder="Placeholder" />
                <input className="valid" type="text" placeholder="Placeholder" />
            </div>
        </React.Fragment>
    }
}

export default ButtonDemo;