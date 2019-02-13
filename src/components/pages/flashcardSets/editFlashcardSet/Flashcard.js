import React, { Component } from 'react';
import './flashcards.css';

class Flashcard extends Component {


    render() {
        const { id, term, definition} = this.props.flashcard;
        return (
            <div className='flashcard'>
                <div style={termStyle}><textarea key={"term"+id.toString()} style={textareaStyle} value={term} placeholder='Term' name='term' onChange={this.props.inputChange.bind(this, id)}/></div>
                <div style={definitionStyle}><textarea key={"definition"+id.toString()} style={textareaStyle} value={definition} placeholder='Definition' name='definition' onChange={this.props.inputChange.bind(this, id)}/></div>
            </div>
        )
    }
}

const termStyle = {
    background: '#f2f9fc',
    minHeight: '56px',
    width: '30%',
    border: '1px solid #384975'
};
const definitionStyle = {
    background: '#ffffff',
    minHeight: '56px',
    width: '68%',
    border: '1px solid #384975'
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
    outline: 'none',
    overflow: 'hidden',
};


export default Flashcard;
