import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class Footer extends Component {
    render() {
        return (
            <div style={headerStyle}>
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
    gridArea: 'footer',
    background: '#00263e',
    color: '#fff',
    textAlign: 'center',
};

export default Footer;