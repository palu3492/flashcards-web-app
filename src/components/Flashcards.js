import React, { Component } from 'react';
import Flashcard from './Flashcard.js';
import './flashcards.css';

class Flashcards extends Component {
    render() {
        return(
            <div id='flashcards'>
                {this.props.flashcards.map((card) => (
                        <Flashcard key={card.id} flashcard={card}/>
                ))}
            </div>
        )
    }
}

export default Flashcards;
