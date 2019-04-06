import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import ViewSetHeader from './ViewSetHeader.js';

class ViewFlashcardSet extends Component {

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
            },
            {
                id: 4,
                term: 'Equality',
                definition: 'The property of distributing economic prosperity uniformly among the members of society'
            },
            {
                id: 5,
                term: 'Opportunity cost',
                definition: 'Whatever must be given up to obtain some item'
            },
            {
                id: 6,
                term: 'Marginal change',
                definition: 'A small incremental adjustment to a plan of action'
            }
        ]
    };


    render() {
        return (
            <React.Fragment>
                <ViewSetHeader/>
                <Flashcards flashcards={this.state.flashcards}/>
            </React.Fragment>
        );
    }
}

export default ViewFlashcardSet;
