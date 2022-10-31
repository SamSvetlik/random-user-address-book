import React, { Component } from 'react';
import './App.css';
import UsersComponent from './UsersComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <UsersComponent/>
        </header>
      </div>
    );
  }
}
export default App;
