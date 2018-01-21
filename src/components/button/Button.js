import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return <a color={this.props.color} className={`rds-button ${this.props.className}`} disabled={this.props.disabled}>Button</a>
    }
}

Button.defaultProps = {
    className: '',
    disabled: false
};

export default Button;