import React, { Component } from 'react';
import Button from "../../components/button/Button";

class ButtonDemo extends Component {
    render() {
        return <React.Fragment>
            <h3>Primary Buttons</h3>

            <Button color="green"/>
            <Button color="red"/>
            <Button color="blue"/>

            <h3>Secondary Buttons</h3>

            <Button secondary color="green"/>
            <Button secondary color="red"/>
            <Button secondary color="blue"/>

            <h3>Disabled Buttons</h3>

            <Button disabled color="green"/>
            <Button disabled color="red"/>
            <Button disabled color="blue"/>
            <Button disabled secondary/>

            <h3>Inputs</h3>

            <input type="text" placeholder="Placeholder" />
            <input disabled type="text" placeholder="Placeholder" />
            <input className="invalid" type="text" placeholder="Placeholder" />
            <input className="valid" type="text" placeholder="Placeholder" />
        </React.Fragment>
    }
}

export default ButtonDemo;