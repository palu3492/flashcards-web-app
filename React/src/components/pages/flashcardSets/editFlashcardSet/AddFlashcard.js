import React, { Component } from 'react';


class AddFlashcard extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addFlashcard();
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
    padding: '20px 30px',
    border: '2px dashed rgb(191, 191, 191)',
    background: 'white',
    cursor: 'pointer',
    margin: '30px',
};


export default AddFlashcard;
