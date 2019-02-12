import React, { Component } from 'react';


class AddFlashcard extends Component {
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
                    <input type='submit' value='Add flashcard' style={addStyle}/>
                </form>
            </div>
        )
    }

}

const addStyle = {
    padding: '30px',
    border: '2px dashed rgb(191, 191, 191)',
    background: 'white',
    cursor: 'pointer',
    margin: '20px',
};


export default AddFlashcard;
