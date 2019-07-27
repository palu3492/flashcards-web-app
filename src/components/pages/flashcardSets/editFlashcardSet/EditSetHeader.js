import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class EditSetHeader extends Component {
    render() {
        return (
            <div style={headerStyle}>
               <input type='text' style={textInputStyle} value={this.props.setName} onChange={this.props.inputChange}/>
                <div style={privacyContainerStyle}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <p style={privacyStyle}>PUBLIC</p>
                        <div style={arrowStyle}></div>
                    </div>
                    <div style={privacyDropStyle}>
                        <p style={privacyStyle}>PUBLIC</p>
                        <p style={privacyStyle}>PRIVATE</p>
                        <p style={privacyStyle}>UNLISTED</p>
                    </div>
                </div>
                <Link to="/view">
                    <input type='submit' value='Save' style={editStyle}/>
                </Link>
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

const textInputStyle = {
    margin: '10px',
    fontFamily: 'Arial',
    fontSize: '16px',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#006298',
    borderBottom: '1px solid rgb(56, 73, 117)',
    paddingBottom: '2px',
    width: '290px',
};

const privacyContainerStyle = {
    marginLeft: '10px',
    marginRight: 'auto',
    cursor: 'pointer',
};
const privacyStyle = {
    background: 'rgb(180, 180, 180)',
    color: 'white',
    fontSize: '10px',
    padding: '4px',
    float: 'left'
};
const privacyDropStyle = {
    position: 'absolute',
    //display: 'flex',
    flexDirection: 'column',
    marginTop: '1px',
    display: 'none'
};

const arrowStyle = {
    background:'rgb(153, 153, 153)',
    float:'left',
    color: 'white',
    fontSize: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5px',
    paddingRight: '5px',
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

export default EditSetHeader;