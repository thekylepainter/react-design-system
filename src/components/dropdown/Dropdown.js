import React, { Component } from 'react'
import './Dropdown.css'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.state = {open: false};
    }

    handleDropdownClick() {
        this.setState({open: !this.state.open});
    }

    render() {
        let menu = this.state.open ? <ul><li>List item</li></ul> : null;

        return <div className={`rds-dropdown ${this.props.className}`} disabled={this.props.disabled}>
            <a onClick={this.handleDropdownClick}>Dropdown</a>
            {menu}
        </div>
    }
}

Dropdown.defaultProps = {
    className: '',
    disabled: false
};

export default Dropdown;