import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import ViewSetHeader from './ViewSetHeader.js';

class ViewFlashcardSet extends Component {

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
                    <ViewSetHeader setName={this.state.set.name}/>
                    <Flashcards flashcards={this.state.set.flashcards}/>
                </React.Fragment>
            );
        }
    }
}

export default ViewFlashcardSet;
