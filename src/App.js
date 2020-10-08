import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from "./Header.js";
import PlayerInformation from "./playerInfo/PlayerInformation.js";
import Playgame from "./Playgame.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: {},
      players: [],
      goToPlay: false
    }
  }

  updatedPlayersInformation = (e, players) => {
    e.preventDefault();
    this.setState({
      players: players
    })
  }

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
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </div>
      </Router>
    );
  }
}

export default App;
