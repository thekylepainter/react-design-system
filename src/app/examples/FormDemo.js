import React, { Component } from 'react';
import Button from "../../components/button/Button";

class FormDemo extends Component {
    render() {
        return <React.Fragment>
            <h3>Form</h3>
            <p>This component provides ways to add information to a form. Crazy right? The web is such a cool platform</p>

            <form>
                <label className="grid-col-2">
                    Title
                    <select>
                        <option selected>Select</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Miss</option>
                    </select>
                </label>

                <label className="grid-col-4">
                    First Name
                    <input type="text" />
                </label>

                <label className="grid-col-6">
                    Last Name
                    <input type="text" />
                </label>

                <label className="grid-col-6">
                    Email
                    <input type="text" />
                </label>

                <label className="grid-col-6">
                    Mobile
                    <input type="text" />
                </label>

                <div className="grid-col-row grid-col-end">
                    <Button color="green"/>
                </div>
            </form>
        </React.Fragment>
    }
}

export default FormDemo;