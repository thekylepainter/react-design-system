import React, { Component } from 'react';
import Button from "../../components/button/Button";

class ButtonDemo extends Component {
    render() {
        return <React.Fragment>
            <h4>Standard Button</h4>

            <Button/>

            <h4>Primary Buttons</h4>

            <Button color="green"/>
            <Button color="orange"/>
            <Button color="red"/>
            <Button color="blue"/>

            <h4>Disabled Buttons</h4>

            <Button disabled/>
            <Button disabled color="green"/>
            <Button disabled color="orange"/>
            <Button disabled color="red"/>
            <Button disabled color="blue"/>
        </React.Fragment>
    }
}

export default ButtonDemo;