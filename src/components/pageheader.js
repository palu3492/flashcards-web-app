import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class PageHeader extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <p style={{padding: '10px', margin: '0', color: '#006298', marginRight: 'auto'}}>Chapter 1: Ten Principles of Economics</p>
                <form>
                    <input type='submit' value='Edit Set' style={editStyle}/>
                </form>
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
    textAlign: 'left',
    height: '50px',
    width: '100%',
    borderBottom: 'solid #bfbfbf 1px',
    display: 'flex',
    // center vertically
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
};
const editStyle = {
    borderRadius: '25px',
    background: '#006298',
    padding: '7px',
    paddingRight: '10px',
    paddingLeft: '10px',
    color: 'white',
    border: 'none',
    marginRight: '10px'
};


export default PageHeader;