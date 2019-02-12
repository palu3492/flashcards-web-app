import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/templateLayout/Header.js';
import Footer from './components/templateLayout/Footer.js';
import ViewFlashcardSet from './components/pages/flashcardSets/viewFlashcardSet/ViewFlashcardSet.js';
import EditFlashcardSet from './components/pages/flashcardSets/editFlashcardSet/EditFlashcardSet.js';
import { Link } from 'react-router-dom';

class App extends Component {

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
                        <Route path='/view' component={ViewFlashcardSet}/>
                        <Route path='/edit' component={EditFlashcardSet}/>
                    </div>

                    <Footer id='footer'/>
                </div>
                </div>
            </Router>
        );
    }
}

export default App;
