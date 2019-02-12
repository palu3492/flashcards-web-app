import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <div style={titleContainer}>
                    <Link to="/">
                        <div style={{textAlign: 'center', cursor: 'pointer'}}>
                            <h1>Quiz Saver</h1>
                            <h5 style={{marginTop: '3px', color: '#cdcdcd', letterSpacing: '1px'}}>Online Flashcards</h5>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

// PropTypes
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// };

const headerStyle = {
    gridArea: 'header',
    background: '#00263e',
    color: '#fff',
    textAlign: 'left',
    height: '76px',
};

const titleContainer = {
    height: '76px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px'
};

export default Header;