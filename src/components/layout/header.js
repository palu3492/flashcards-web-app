import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <div style={titleContainer}>
                    <h2>Flashcards</h2>
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