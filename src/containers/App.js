import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  constructor() {
    //inherit component props and methods
    super();
    this.state = {
      person: [
        { name: 'Carmander', age: 28, id: 1 },
        { name: 'Marc', age: 29, id: 2 },
        { name: 'Stephanie', age: 26, id: 3 },
        { name: 'Jane', age: 35, id: 4 },
        { name: 'Erich', age: 54, id: 5 },
        { name: 'Jeff', age: 16, id: 6 },
        { name: 'Rosalie', age: 43, id: 7 },

      ],
      otherSomething: 'something',
      showPersons: false,
      };
    };
  

//delete person button 
detelePersonHandler = (personIndex) => {
  const personCopy = [...this.state.person];
  personCopy.splice(personIndex, 1);
  this.setState({
    person: personCopy
  });  
}

nameChangeHandler = (event, personIndex) => {
  const persons = [...this.state.person];
  persons[personIndex].name = event.target.value;
  this.setState({
    person: persons
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <StyleRoot >
            <div className="personRender">
              {this.state.person.map((person, index) => {
                return (
                  <Person 
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  delete={this.detelePersonHandler.bind(this, index)} 
                  changed={(event) => this.nameChangeHandler(event, index)}
                  />
                );
              })}
              
            </div>
          </StyleRoot>
        );

        style.backgroundColor = 'red';
        style.color = 'black';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'white'
        };
    }
    
    const classes = [];

    if (this.state.person.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.person.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}

      </div>
    );
  }
}

export default Radium(App);
