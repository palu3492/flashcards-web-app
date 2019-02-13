import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import EditSetHeader from './EditSetHeader.js';
import AddFlashcard from "./AddFlashcard";
import SaveSet from "./SaveSet";

class EditFlashcardSet extends Component {

    render() {
        return (
            <div>
                <EditSetHeader/>
                <Flashcards flashcards={this.props.flashcards} inputChange={this.props.inputChange}/>
                <AddFlashcard/>
                <SaveSet/>
            </div>
        );
    }
}

export default EditFlashcardSet;
