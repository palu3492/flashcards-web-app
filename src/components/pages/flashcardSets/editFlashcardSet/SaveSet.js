import React, { Component } from 'react';


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
                <form onSubmit={this.onSubmit}>
                    <input type='submit' value='Save' style={saveStyle}/>
                </form>
            </div>
        )
    }

}

const saveStyle = {
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    background: 'rgb(0, 98, 152)',
    padding: '10px 30px'
};


export default SaveSet;
