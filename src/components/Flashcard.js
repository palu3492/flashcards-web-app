import React, { Component } from 'react';
import './flashcards.css';

class Flashcard extends Component {

    render() {
        const { title, definition} = this.props.flashcard;
        return (
            <div className='flashcard'>
                <div style={titleStyle}><p>{title}</p></div>
                <div style={definitionStyle}><p>{definition}</p></div>
            </div>
        )
    }
}

const titleStyle = {
    float: 'left',
    background: '#f2f9fc',
    width: '20%',
    height: '100px',
    boxShadow: '1px 1px 5px #7a7a7a',
    marginRight: '20px',
    flexGrow: '1'
};
const definitionStyle = {
    float: 'left',
    background: '#ffffff',
    width: '50%',
    height: '100px',
    boxShadow: '1px 1px 5px #7a7a7a',
    flexGrow: '3'
};


export default Flashcard;
