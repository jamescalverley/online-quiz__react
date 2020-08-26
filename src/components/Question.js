import React from 'react';

function Question(props){
    console.log("current", props.activeQ)
    return (
        <div className="active-question">
            <h3>{props.activeQ.heading}</h3>
            <p>{props.activeQ.content}</p>
            <div>
                {props.activeQ.choices.map( answer => 
                    <button key={answer}>{answer}</button>
                )}
            </div>
        </div>
    );
};

export default Question;