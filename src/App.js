import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from "axios";

import Header from './Header.js'
import Footer from './Footer.js'
import Category from './Category.js';
import ScoreBoard from './ScoreBoard.js';
import Timer from './Timer.js'
import PlayerInformation from './playerInfo/PlayerInformation.js';
import Playgame from './Playgame.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: {},
      players: [],
      goToPlay: false
    }
  }

  // handleChange = (event) => {
  //   console.log(event);
  //   this.setState({
  //     players: event.target.value,
  //   })
  // }

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
      players: [],
      goToPlay: false
    })
  }

  getCategory = (e, players) => {
    e.preventDefault();
    this.setState({
      players: players,
      goToPlay: true
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">

          <Header />
          {this.state.goToPlay ? <Redirect to="/play" /> : null}

          <Route exact path="/">
            <PlayerInformation
              getCategory={this.getCategory} />
          </Route>

          <Route path="/play" render={(props) => <Playgame players={this.state.players} reset={this.handleReset}/>} />

          
        </div>
      </Router>
    );
  }
}

export default App;
