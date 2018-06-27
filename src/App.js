import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    //inherit component props and methods
    super();
    this.state = {
      person: [
        { name: 'Carmander', age: 28, id: 1 },
        { name: 'Marc', age: 29, id: 2 },
        { name: 'Stephanie', age: 26, id: 3 }
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          < div className="personRender">
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
            
          </div >
        );
    }


    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons}

      </div>
    );
  }
}

export default App;
