import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './ui/Nav';
import Home from './container/Home';


class App extends Component {
  render() {
    const logo = 'Liliu'
    return (
      <div className="container">
        <Nav logo={logo}/>
        <Home />
      </div>
    );
  }
}

export default App;
