import React from 'react';
import './Person.css';

const Person = ( props ) => {
    
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input className="personInput" type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.delete} className="deleteButton">Delete</button>
        </div>
        
    );
};

export default Person;