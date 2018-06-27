import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    //inherit component props and methods
    super();
    this.state = {
      person: [
        { name: 'Max', age: 28, id: 1 },
        { name: 'Manu', age: 29, id: 2 },
        { name: 'Stephanie', age: 26, id: 3 }
      ],
      otherSomething: 'something',
      showPersons: false,
      };
    };
  


  //switches users name
  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          < div >
            {this.state.person.map((person, i) => {
              return (
                <Person name={person.name} age={person.age} key={person.id} />
              );
            })}
            
          </div >
        );
    }

    const arrayOn = [<div>a</div>, <div>b</div>, <div>c</div>];

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons}
        {arrayOn}

      </div>
    );
  }
}

export default App;
