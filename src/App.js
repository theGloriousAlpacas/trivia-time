import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Category from './Category.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      questions: {},
      players: '',
    }
  }

  componentDidMount() {
    axios({
      url:'https://opentdb.com/api.php',
      params: {
        amount: 12,
        category: 9,
        difficulty: 'easy',
        type: 'multiple',
      }
    }).then(response => {
      const res = response.data.results;
      // console.log(response.data.results);
      this.setState({
        questions: res,
      })
      console.log(this.state.questions)
    })
  }

  handleChange =(event) => {
    console.log(event);
    this.setState({
      players: event.target.value,
    })
    // console.log(this.state);
  }
  render() {
    console.log(this.state.players);
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
      <Category />
    </div>
  );
}
}

export default App;
