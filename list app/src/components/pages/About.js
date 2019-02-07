import React from 'react';

function About() {
    return (
        // Fragment does not show in dom
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0</p>
        </React.Fragment>
    )
}

export default About;