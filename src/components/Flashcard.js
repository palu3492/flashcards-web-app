import React, { Component } from 'react';

class Flashcard extends Component {

    render() {
        const { title, definition} = this.props.flashcard;
        return (
            <div style={flashcardStyle}>
                <div style={titleStyle}>{title}</div>
                <div style={definitionStyle}>{title}</div>
            </div>
        )
    }
}

const flashcardStyle = {
    float: 'left',
    width: '100%',
    height: '30px',
    margin: '20px'
};
const titleStyle = {
    float: 'left',
    background: '#f2f9fc',
    width: '20%',
    height: '100px',
};
const definitionStyle = {
    float: 'left',
    background: '#ffffff',
    width: '50%',
    height: '100px',
};


export default Flashcard;
