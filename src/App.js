import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Afeka-War-Game Console</h1>
        </header>
        <p className="App-intro">
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </p>
      </div>
    );
  }
}

export default App;
