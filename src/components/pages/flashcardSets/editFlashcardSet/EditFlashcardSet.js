import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import EditSetHeader from './EditSetHeader.js';
import AddFlashcard from "./AddFlashcard";
import SaveSet from "./SaveSet";

class EditFlashcardSet extends Component {

    idCount = 3;

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
    ],
        name: 'Chapter 1: Ten Principles of Economics'
    };

    onChange = (id, e) => {
        this.setState({ flashcards: this.state.flashcards.map(flashcard => {
                if(flashcard.id === id) {
                    if(e.target.name === 'term'){
                        flashcard.term = e.target.value;
                    } else {
                        flashcard.definition = e.target.value;
                    }
                }
                return flashcard
            }) })
    };

    onChangeName = (e) => {
        this.setState({name: e.target.value})
    };

    addFlashcard = () =>  {
        this.setState({ flashcards: [...this.state.flashcards, {id: ++this.idCount, term: '', definition: ''}] });
    };

    render() {
        return (
            <div>
                <EditSetHeader setName={this.state.name} inputChange={this.onChangeName}/>
                <Flashcards flashcards={this.state.flashcards} inputChange={this.onChange}/>
                <AddFlashcard addFlashcard={this.addFlashcard}/>
                <SaveSet/>
            </div>
        );
    }
}

export default EditFlashcardSet;
