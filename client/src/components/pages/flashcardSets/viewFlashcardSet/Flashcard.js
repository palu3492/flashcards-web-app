import React, { Component } from 'react';
import './flashcards.css';

class Flashcard extends Component {

    render() {
        const { term, definition} = this.props.flashcard;
        return (
            <div className='flashcard'>
                <div style={termStyle}><p style={textSytle}>{term}</p></div>
                <div style={definitionStyle}><p style={textSytle}>{definition}</p></div>
            </div>
        )
    }
}

const termStyle = {
    background: '#f2f9fc',
    minHeight: '56px',
    boxShadow: '1px 1px 5px #7a7a7a',
    width: '30%'
};
const definitionStyle = {
    background: '#ffffff',
    minHeight: '56px',
    boxShadow: '1px 1px 5px #7a7a7a',
    width: '68%'
};
const textSytle = {
    padding: '10px',
    overflow: 'hidden',
};


export default Flashcard;
