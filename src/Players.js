import React, { Component } from 'react';
import Category from './Category.js';

class Players extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      isShowingAvatars: false
    }
  }

  // const color = [red, blue, green, yellow, purple, brown, pink];
  getAvatars = () => {
    return [
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=blue",
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=red",
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=yellow",
      "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=purple"
    ]
  };

  handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)

    const names = []

    this.setState({

    })
  }

  generatePlayers = () => {
    if (this.state.isShowingAvatars) {
      const players = this.state.players;
      let avatars = this.getAvatars();
      console.log(avatars);
      return (
        <div>
          {players.map((player, index) => {
            return (
              <div>
                <img src={player.img} alt="" />
                <input onChange={this.handleChange} id={player.id} />
              </div>
            )
          })}
        </div>
      );
    } else {
      return <></>
    }
  };

  updatePlayers = (e, numberOfPlayers) => {
    e.preventDefault();
    this.setState({
      isShowingAvatars: true
    })

    let players = [];
    let avatars = this.getAvatars();

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

    this.setState({
      players: stateArray
    })

  }

  sendData() {
    this.props.getPlayerInformation(this.state.players)
  }

  render() {
    return (
      <>
        <form>
          <button onClick={(e) => this.updatePlayers(e, this.props.numberOfPlayers)}>Click me</button>
          {this.generatePlayers()}
          <button onSubmit={(e) => { this.props.getPlayerInformation(e, this.state.players) }}>STATE</button>
        </form>

      </>
    );
  }
}

export default Players;