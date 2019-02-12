import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import EditSetHeader from './EditSetHeader.js';

class EditFlashcardSet extends Component {

    state = {
        flashcards:[
            {
                id: 1,
                title: 'Scarcity',
                definition: 'The limited nature of society’s resources'
            },
            {
                id: 2,
                title: 'Economics',
                definition: 'The study of how society manages its scarce resources'
            },
            {
                id: 3,
                title: 'Efficiency',
                definition: 'The property of society getting the most it can from its scarce resources'
            }

        ]
    };


    render() {
        return (
            <React.Fragment>
                <EditSetHeader/>
                <Flashcards flashcards={this.state.flashcards}/>
            </React.Fragment>
        );
    }
}

export default EditFlashcardSet;
