import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Players from './Players.js';
import Category from './Category.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: {},
      players: '',
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      players: event.target.value,
    })
  }

  render() {
    // console.log(this.state.players);
    return (
      <div className="App">
        <form>
          <fieldset>
            <label htmlFor="">Number of players: </label>
            <select onChange={this.handleChange}>
              <option disabled selected className="default">Number of Players</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </fieldset>
        </form>
        <Players numberOfPlayers={this.state.players} />

      </div>
    );
  }
}

export default App;
