import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderButton extends Component {

    link = "/" + this.props.title;

    render() {
        return (
            <Link to={this.link}>
                <div style={accountStyle}>
                    <p style={{color: 'white'}}>{this.props.title}</p>
                </div>
            </Link>
        )
    }
}



const accountStyle = {
    height: '100%',
    width: '100px',
    border: '1px solid #006298',
    borderTop: 'none',
    borderBottom: 'none',
    float: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
};

export default HeaderButton;
