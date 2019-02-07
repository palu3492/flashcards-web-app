import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <h1>Online Flashcards</h1>
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
    textAlign: 'center',
    padding: '10px',
    height: '76px'
};

export default Header;