import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class EditSetHeader extends Component {
    render() {
        return (
            <div style={headerStyle}>
               <textarea style={textareaStyle}>Chapter 1: Ten Principles of Economics</textarea>
                <p style={privacyStyle}>PRIVATE</p>
                {/*<form>*/}
                    {/*<input type='submit' value='Study' style={editStyle}/>*/}
                    {/*<input type='submit' value='Edit' style={editStyle}/>*/}
                    {/*<input type='submit' value='Share' style={editStyle}/>*/}
                {/*</form>*/}
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
const privacyStyle = {
    background: '#006298',
    // padding: '7px',
    // paddingRight: '10px',
    // paddingLeft: '10px',
    color: 'white',
    marginLeft: '4px',
    marginRight: 'auto',
    fontSize: '10px',
    padding: '4px'
};

const textareaStyle = {
    padding: '10px',
    fontFamily: 'Arial',
    fontSize: '16px',
    background: 'none',
    border: 'none',
    resize: 'none',
    outline: 'none',
    color: '#006298',
};



export default EditSetHeader;