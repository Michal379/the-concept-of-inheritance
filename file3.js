import React, { Component } from 'react';

// Parent/Base Class Component
class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Generic Animal',
    };
  }

  makeSound() {
    console.log('Generic animal sound');
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Sound: {this.makeSound()}</p>
      </div>
    );
  }
}

// Child Class Component inheriting from Animal
class Cat extends Animal {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cat',
    };
  }

  makeSound() {
    console.log('Meow');
  }

  // Additional functionality specific to Cat
  purr() {
    console.log('Purring');
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Sound: {this.makeSound()}</p>
        <p>Additional Action: {this.purr()}</p>
      </div>
    );
  }
}

// Parent Component
class App extends Component {
  render() {
    return (
      <div>
        <h1>Animal App</h1>
        <Animal />
        <hr />
        <h1>Cat App</h1>
        <Cat />
      </div>
    );
  }
}

export default App;

