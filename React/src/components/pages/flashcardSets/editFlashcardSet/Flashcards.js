import React, { Component } from 'react';
import Flashcard from './Flashcard.js';
import './flashcards.css';
// list of flashcard component for viewing flashcard set
class Flashcards extends Component {

    render() {
        return(
            <React.Fragment>
                <div id='flashcards'>
                    {this.props.flashcards.map((card) => (
                            <Flashcard key={card.id} flashcard={card} inputChange={this.props.inputChange}/>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default Flashcards;
