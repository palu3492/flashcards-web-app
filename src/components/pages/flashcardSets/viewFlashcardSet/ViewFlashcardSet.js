import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import ViewSetHeader from './ViewSetHeader.js';

class ViewFlashcardSet extends Component {


    render() {
        return (
            <React.Fragment>
                <ViewSetHeader/>
                <Flashcards flashcards={this.props.flashcards}/>
            </React.Fragment>
        );
    }
}

export default ViewFlashcardSet;
