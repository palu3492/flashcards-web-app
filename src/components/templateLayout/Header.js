import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HeaderButton from "./HeaderButton";
// import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <div style={titleContainer}>
                    <Link to="/">
                        <div style={{textAlign: 'center', cursor: 'pointer'}}>
                            <h1>Quiz Saver</h1>
                            <h5 style={subTitleStyle}>Online Flashcards</h5>
                        </div>
                    </Link>
                </div>
                <HeaderButton title='Account'/>
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
};

const titleContainer = {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    height: '76px',
    paddingLeft: '10px',
    width: '300px',
    float: 'left'
};
const subTitleStyle = {
    marginTop: '2px',
    color: '#cdcdcd',
    letterSpacing: '1px',
    wordSpacing: '4px',
    background: '#ffffff1c',
    padding: '1px'
};

export default Header;