import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Header from './Header.js'
import Footer from './Footer.js'
import Players from './Players.js';
import Category from './Category.js';
import ScoreBoard from './ScoreBoard.js';
import Timer from './Timer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: {},
      players: ''
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      players: event.target.value,
    })
  }

  updatedPlayersInformation = (e, players) => {
    e.preventDefault();
    this.setState({
      players: players
    })
  }

  // Event Listener for Play Again button
  // Resets state to be empty so players can start again
  // Confirm all key value pairs in state
  handleReset = (event) => {
    event.preventDefault();
    this.setState({
      questions: {},
      players: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
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

          <Players numberOfPlayers={this.state.players} getPlayerInformation={this.updatedPlayersInformation} />
          <Category playerInfo={this.state.players} getPlayerInformation={this.updatedPlayersInformation} />
          <Timer />
        </main>
        
      </div>
    );
  }
}

export default App;
