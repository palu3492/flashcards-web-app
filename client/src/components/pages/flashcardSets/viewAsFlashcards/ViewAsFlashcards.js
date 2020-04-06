import React, { Component } from 'react';
import ViewFlashcardsHeader from './ViewFlashcardsHeader.js';
import StudyFlashcards from './StudyFlashcards.js';

class ViewAsFlashcards extends Component {

    state = {
        set: {},
        isLoaded: false
    };

    componentDidMount(){
        const setId = this.props.match.params.id;
        const api = 'https://my-json-server.typicode.com/palu3492/react-flashcard-app/db';
        let set = undefined;
        fetch(api)
            .then(res => res.json())
            .then(json => {
                json['sets'].forEach(function (flashcardSet) {
                    if (flashcardSet['id'] === setId) {
                        set = flashcardSet;
                    }
                });
                if(set) {
                    this.setState({isLoaded: true, set: set});
                }
            });
    }

    render() {
        if (!this.state.isLoaded) {
            return <div> Loading... </div>
        } else {
            return (
                <React.Fragment>
                    <ViewFlashcardsHeader setName={this.state.set.name} setId={this.state.set.id}/>
                    <StudyFlashcards flashcards={this.state.set.flashcards}/>
                </React.Fragment>
            );
        }
    }
}

export default ViewAsFlashcards;
