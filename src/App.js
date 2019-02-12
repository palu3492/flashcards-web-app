import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import Flashcards from './components/Flashcards.js';
import PageHeader from './components/pageheader.js';

class App extends Component {

    state = {
        flashcards:[
            {
                id: 1,
                title: 'Scarcity',
                definition: 'The limited nature of society’s resources'
            },
            {
                id: 2,
                title: 'Economics',
                definition: 'The study of how society manages its scarce resources'
            },
            {
                id: 3,
                title: 'Efficiency',
                definition: 'The property of society getting the most it can from its scarce resources'
            }

        ]
    };


    render() {
        return (
          <div className="App">
            <div id='container'>
                <div id='side-left'/>
                <Header/>
                <div id='side-right'/>

                <div id='content'>
                    <PageHeader/>
                    <Flashcards flashcards={this.state.flashcards}/>
                </div>

                <Footer id='footer'/>
            </div>
          </div>
        );
    }
}

export default App;
