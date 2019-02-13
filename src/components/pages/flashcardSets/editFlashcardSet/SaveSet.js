import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SaveSet extends Component {
    state = {
        title: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.addTodo(this.state.title);
        // this.setState({title: ''})
        console.log('pressed');
    };

    render() {
        return (
            <div style={{width:'100%', textAlign: 'center'}}>
                <Link to="/view">
                    <input type='submit' value='Save' style={saveStyle}/>
                </Link>
            </div>
        )
    }

}

const saveStyle = {
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    background: 'rgb(0, 98, 152)',
    padding: '10px 30px',
    marginBottom: '10px'
};


export default SaveSet;
