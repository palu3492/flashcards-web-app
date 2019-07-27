import React, { Component } from 'react';
import Flashcards from './Flashcards.js';
import ViewSetHeader from './ViewSetHeader.js';

class ViewFlashcardSet extends Component {

    state = {
        set: {

        },
        isLoad: false
    };
    /*
    state = {
        flashcards:[
            {
                id: 1,
                term: 'Scarcity',
                definition: 'The limited nature of society’s resources'
            },
            {
                id: 2,
                term: 'Economics',
                definition: 'The study of how society manages its scarce resources'
            },
            {
                id: 3,
                term: 'Efficiency',
                definition: 'The property of society getting the most it can from its scarce resources'
            },
            {
                id: 4,
                term: 'Equality',
                definition: 'The property of distributing economic prosperity uniformly among the members of society'
            },
            {
                id: 5,
                term: 'Opportunity cost',
                definition: 'Whatever must be given up to obtain some item'
            },
            {
                id: 6,
                term: 'Marginal change',
                definition: 'A small incremental adjustment to a plan of action'
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            item:[],
            isLoaded: false
        }
    }
    */
    componentDidMount(){
        const api = 'https://my-json-server.typicode.com/palu3492/react-flashcard-app/db';
        fetch(api)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    /*
    if(!isLoaded){
            return <div> Loading... </div>
        }else{
            return (
                <ul>
                {items['flashcards'].map(item => (
                    <li key={item.id}>
                        {item.term}
                    </li>
                ))};
                </ul>
            );
        }
     */


    render() {
        return (
            <React.Fragment>
                <ViewSetHeader/>
                <Flashcards flashcards={this.state.flashcards}/>
            </React.Fragment>
        );
    }
}

export default ViewFlashcardSet;
