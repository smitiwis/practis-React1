import React, { Component } from 'react';
import './assets/css/App.css';
// Componentes

// Rutas
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
