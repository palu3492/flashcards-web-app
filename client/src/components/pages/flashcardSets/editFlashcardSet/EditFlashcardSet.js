import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import EditSetHeader from './EditSetHeader.js';
import AddFlashcard from "./AddFlashcard";
import SaveSet from "./SaveSet";

class EditFlashcardSet extends Component {

    state = {
        set: {},
        isLoaded: false,
        idCount: 0
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
                    this.setState({isLoaded: true, set: set, idCount: set.flashcards.length});
                }
            });
    }

    onChange = (id, e) => {
        e.persist(); // not sure why I need this
        this.setState(prevState => {
            let set = { ...prevState.set };
            set.flashcards.map(flashcard => {
                if (flashcard.id === id) {
                    if (e.target.name === 'term') {
                        flashcard.term = e.target.value;
                    } else {
                        flashcard.definition = e.target.value;
                    }
                }
                return flashcard;
            });
            return {set: set};
        });
    };

    onChangeName = (e) => {
        this.setState(prevState => {
            let set = { ...prevState.set };
            set.name = e.target.value;
            return {set: set};
        })
    };

    addFlashcard = () =>  {
        this.setState(prevState => {
            let set = { ...prevState.set };
            set.flashcards = [...set.flashcards, {id: prevState.idCount+1, term: '', definition: ''}];
            return {set: set, idCount: prevState.idCount+1};
        })
    };

    render() {
        if (!this.state.isLoaded) {
            return <div> Loading... </div>
        } else {
            return (
                <div>
                    <EditSetHeader setName={this.state.set.name} inputChange={this.onChangeName}/>
                    <Flashcards flashcards={this.state.set.flashcards} inputChange={this.onChange}/>
                    <AddFlashcard addFlashcard={this.addFlashcard}/>
                    <SaveSet setId={this.state.set.id}/>
                </div>
            );
        }
    }

}

export default EditFlashcardSet;
