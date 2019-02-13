import React, { Component } from 'react';
import ViewFlashcardsHeader from './ViewFlashcardsHeader.js';
import StudyFlashcards from './StudyFlashcards.js';

class ViewAsFlashcards extends Component {

    state = {
        flashcards:[
            {
                id: 1,
                term: 'Scarcity',
                definition: 'The limited nature of society’s resources'
            },
            {
                id: 2,
                term: 'Economics',
                definition: 'The study of how society manages its scarce resources'
            },
            {
                id: 3,
                term: 'Efficiency',
                definition: 'The property of society getting the most it can from its scarce resources'
            }

        ]
    };


    render() {
        return (
            <React.Fragment>
                <ViewFlashcardsHeader/>
                <StudyFlashcards flashcards={this.state.flashcards}/>
            </React.Fragment>
        );
    }
}

export default ViewAsFlashcards;
