import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/login';



class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Mi APP Parcial2</h1>
      <Login></Login>
      </header>
    </div>
    );
  }
}

export default App;
