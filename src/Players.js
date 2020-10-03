import axios from 'axios';
import React, { Component } from 'react';

class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }

  // componentDidMount() {
  //   axios({
  //     url:'https://avatars.dicebear.com/api/bottts/example.svg?mood[]=happy',
  //     // params: {
  //     //   amount: 12,
  //     //   category: 9,
  //     //   difficulty: 'easy',
  //     //   type: 'multiple',
  //     // }
  //   }).then(response => {
  //     console.log("hi");
  //   })
  // }

  generatePlayers = (numberOfPlayers) => {
    // e.preventDefault();
    let players = [];
    // const color = [red, blue, green, yellow, purple, brown, pink];
    const avatars = [
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=blue",
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=red",
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=yellow",
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=purple"
    ];
    for (let i = 0; i < numberOfPlayers; i++) {
      players.push(i);
    }
    const stateArray = [];
    players.forEach((player, index) => {
      stateArray.push({
        id: index + 1,
        img: avatars[index]
      })
    })
    this.setState ({
      players: stateArray
    })
    
    return (
      <div>
        {players.map((player, index) => {
          

          return (
            <div>
              <input id={player + 1} />;
            <img src={avatars[player]} alt=""/>
            </div>
          )
        })}
      </div>
    );
  };

  render() {
    return (
    //   <form className="playerForm">
    //     {/* Hey react we chose 3 players so let's make 3 divs with forms in them so we can submit the names and save them in the state. */}
    //     {/* {this.generatePlayers(this.props.numberOfPlayers)} */}
    //     <button onClick={this.generatePlayers}></button>
        <form>
          {() => {this.generatePlayers(this.props.numberOfPlayers)}}
            
        </form>
    );
  }
}

export default Players;