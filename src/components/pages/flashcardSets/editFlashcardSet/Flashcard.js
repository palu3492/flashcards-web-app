import React, { Component } from 'react';
import './flashcards.css';

class Flashcard extends Component {

    render() {
        const { title, definition} = this.props.flashcard;
        return (
            <div className='flashcard'>
                <div style={titleStyle}><textarea style={textareaStyle}>{title}</textarea></div>
                <div style={definitionStyle}><textarea style={textareaStyle}>{definition}</textarea></div>
            </div>
        )
    }
}

const titleStyle = {
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
const textareaStyle = {
    padding: '10px',
    width: '100%',
    height: '100%',
    fontFamily: 'Arial',
    fontSize: '16px',
    background: 'none',
    border: 'none',
    resize: 'none',
    outline: 'none'
};


export default Flashcard;
