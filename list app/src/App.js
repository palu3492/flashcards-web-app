import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/header.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About.js';
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component {

    state = {
        todos:[

        ]
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
    }

    // Toggle complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }) })
    };

    // Delete todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    };

    // Add todo
    addTodo = (title) => {
        // const newTodo = {id: uuid.v4(), title, completed: false};
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            complete: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    };

  render() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header/>
                    <Route exact path='/' render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                        </React.Fragment>
                    )}/>
                    <Route path='/about' component={About}/>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
