import React, { Component } from 'react';
import Flashcard from './Flashcard.js';
import './flashcards.css';

class Flashcards extends Component {
    render() {
        return(
            <React.Fragment>
                <div id='flashcards'>
                    {this.props.flashcards.map((card) => (
                            <Flashcard key={card.id} flashcard={card}/>
                    ))}
                </div>
                {/*<AddFlashcard />*/}
            </React.Fragment>
        )
    }
}

export default Flashcards;
