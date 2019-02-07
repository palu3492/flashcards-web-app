import React, { Component } from 'react';
import Flashcard from './Flashcard.js';

class Flashcards extends Component {
    render() {
        return this.props.flashcards.map((card) => (
            <Flashcard key={card.id} flashcard={card}/>
        ))
    }
}

export default Flashcards;
