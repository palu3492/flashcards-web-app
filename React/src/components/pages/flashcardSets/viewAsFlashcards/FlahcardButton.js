import React, { Component } from 'react';


class FlahcardButton extends Component {

    render() {
        return (
            <input type='submit' value={this.props.value} style={buttonStyle} onClick={this.props.onClick}/>
        )
    }

}

const buttonStyle = {
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    background: 'rgb(0, 98, 152)',
    padding: '10px 30px',
    fontSize: '18px',

};


export default FlahcardButton;
