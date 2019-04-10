import React, { Component } from 'react';
import './App.sass';
import Home from './components/Home/home';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mi Aplicacion React</h1>
        </header>
        <Home/>
        <Footer/>
    </div>
        );
      }
    }
    
    export default App;
