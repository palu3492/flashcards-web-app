import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/templateLayout/Header.js';
import Footer from './components/templateLayout/Footer.js';
import ViewFlashcardSet from './components/pages/flashcardSets/viewFlashcardSet/ViewFlashcardSet.js';
import EditFlashcardSet from './components/pages/flashcardSets/editFlashcardSet/EditFlashcardSet.js';
import { Link } from 'react-router-dom';

class App extends Component {

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
            }

        ]
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

    render() {
        return (
            <Router>
                <div className="App">
                <div id='container'>
                    <div id='side-left'/>
                    <Header/>
                    <div id='side-right'/>

                    <div id='content'>
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                <Link to="/view">View</Link>
                                <br/>
                                <br/>
                                <Link to="/edit">Edit</Link>
                            </React.Fragment>
                        )}/>
                        <Route path='/view' component={() => <ViewFlashcardSet flashcards={this.state.flashcards}/>}/>
                        <Route path='/edit' component={() => <EditFlashcardSet flashcards={this.state.flashcards} inputChange={this.onChange}/>}/>
                    </div>

                    <Footer id='footer'/>
                </div>
                </div>
            </Router>
        );
    }
}

export default App;
