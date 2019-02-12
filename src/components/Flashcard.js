import React, { Component } from 'react';
import './flashcards.css';

class Flashcard extends Component {

    render() {
        const { title, definition} = this.props.flashcard;
        return (
            <div className='flashcard'>
                <div style={titleStyle}><p style={textSytle}>{title}</p></div>
                <div style={definitionStyle}><p style={textSytle}>{definition}</p></div>
            </div>
        )
    }
}

const titleStyle = {
    background: '#f2f9fc',
    height: '100px',
    boxShadow: '1px 1px 5px #7a7a7a',
    width: '30%'
};
const definitionStyle = {
    background: '#ffffff',
    height: '100px',
    boxShadow: '1px 1px 5px #7a7a7a',
    width: '68%'
};
const textSytle = {
    padding: '10px'
};


export default Flashcard;
