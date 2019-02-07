import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import Flashcards from './components/Flashcards.js';

class App extends Component {

    state = {
        flashcards:[
            {
                id: 1,
                title: 'Test',
                definition: 'Test'
            },
            {
                id: 2,
                title: 'Test',
                definition: 'Test'
            },
            {
                id: 3,
                title: 'Test',
                definition: 'Test'
            }

        ]
    };


    render() {
        return (
          <div className="App">
            <div id='container'>
                <Header/>
                <div id='content'>
                    <Flashcards flashcards={this.state.flashcards}/>
                </div>
                <Footer id='footer'/>
            </div>
          </div>
        );
    }
}

export default App;
