import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = ( props ) => {

    const mainContainer = {
       

        '@media (max-width: 700px) and (min-width: 600px)' : {
            width: '90%'
        } 
    }
    
    return (
        <div className='Person' style={mainContainer}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input className="personInput" type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.delete} className="deleteButton">Delete</button>
        </div>
        
    );
};

export default Radium(Person);