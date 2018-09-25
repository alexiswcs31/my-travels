import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What is your travel ?</h1>
        </header>
        <Travel
          destination="Wellington"
          country="New Zealand"
          photo="https://destination-nouvellezelande.com/wp-content/uploads/2017/12/wellington_682572673.jpg"
          distance="The distance France to New Zealand is equal to 19 178 km."
        />
        <Travel
          destination="Petra"
          country="Jordan"
          photo="http://siegehublot.com/wp-content/uploads/2017/05/jordanie-20.jpg"
          distance="The distance France to Jordan is equal to 3 399 km."
        />
      </div>
    );
  }
}

export default App;
