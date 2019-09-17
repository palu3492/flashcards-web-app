import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/templateLayout/Header.js';
import Footer from './components/templateLayout/Footer.js';
import ViewFlashcardSet from './components/pages/flashcardSets/viewFlashcardSet/ViewFlashcardSet.js';
import EditFlashcardSet from './components/pages/flashcardSets/editFlashcardSet/EditFlashcardSet.js';
import { Link } from 'react-router-dom';
import ViewAsFlashcards from "./components/pages/flashcardSets/viewAsFlashcards/ViewAsFlashcards";

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
                                <Link to="/view/he24na">View</Link>
                                <br/>
                                <br/>
                                <Link to="/edit/he24na">Edit</Link>
                            </React.Fragment>
                        )}/>
                        <Route path='/view/:id' component={(props) => <ViewFlashcardSet {...props}/>}/>
                        <Route path='/edit/:id' component={(props) => <EditFlashcardSet {...props}/>}/>
                        <Route path='/study/:id' component={(props) => <ViewAsFlashcards {...props}/>}/>
                    </div>

                    <Footer id='footer'/>
                </div>
                </div>
            </Router>
        );
    }
}

export default App;
