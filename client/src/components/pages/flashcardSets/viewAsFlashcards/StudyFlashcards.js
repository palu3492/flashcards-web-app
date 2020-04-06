import React, { Component } from 'react';
import FlahcardButton from './FlahcardButton'

class StudyFlashcards extends Component {

    state = {
        flipped: false,
        cardNumber: 0,
    };

    flipClick = () => {
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }));
    };

    nextClick = () => {
        this.setState(prevState => ({
            cardNumber: (prevState.cardNumber+1)%this.props.flashcards.length
        }));

    };

    getValue = () => {
        const flashcard = this.props.flashcards[this.state.cardNumber];
        if(!this.state.flipped) {
            return flashcard.term;
        }
        return flashcard.definition;
    };

    getCountText = () => {
        return (this.state.cardNumber+1).toString() + "/" + this.props.flashcards.length.toString();
    };

    render() {
        return (
            <div style={outerContainerStyle}>
                <div style={flashcardContainerStyle}>
                    <h1 style={{fontWeight: 'normal', padding: '20px'}}>{this.getValue()}</h1>
                    <p style={cardCountStyle}>{this.getCountText()}</p>
                </div>
                <div style={buttonsContainerStyle}>
                    <FlahcardButton value='Flip' onClick={this.flipClick}/>
                    <FlahcardButton value='Next' onClick={this.nextClick}/>
                </div>
            </div>
        );
    }
}

const outerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
};
const flashcardContainerStyle = {
    width: '600px',
    height: '300px',
    background: '#fff',
    boxShadow: '1px 1px 5px #7a7a7a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const buttonsContainerStyle = {
    marginLeft: '30px',
    height: '300px',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
};
const cardCountStyle = {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: '600px',
    textAlign: 'right',
    padding: '20px',
    color: 'grey'
};

export default StudyFlashcards;
