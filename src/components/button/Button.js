import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        let secondaryClass = this.props.secondary ? 'rds-button--secondary' : '';
        return <a color={this.props.color} className={`rds-button ${secondaryClass} ${this.props.className}`} disabled={this.props.disabled}>Button</a>
    }
}

Button.defaultProps = {
    className: '',
    disabled: false,
    secondary: false
};

export default Button;