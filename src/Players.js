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

  generatePlayers = () => {
    if (this.state.isShowingAvatars) {
      const players = this.state.players;
      let avatars = this.getAvatars();
      return (
        <>
          <div>
            {players.map((player, index) => {
              return (
                <div>
                  <img src={player.img} alt="" />
                  <input className={`name-${index + 1}`} onChange={this.handleChange} id={player.id} />
                </div>
              )
            })}
          </div>
          <button onClick={(e) => this.nameSubmit(e)}>PUSH ITEMS</button>
        </>
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

  nameSubmit = (e) => {
    e.preventDefault()

    const names = []
    let playerName

    for (let i = 0; i < this.state.players.length; i++) {
      playerName = document.querySelector(`.name-${i + 1}`).value
      names.push(playerName)
    }

    const currentState = this.state.players

    currentState.forEach((player, index) => {
      player.name = names[index]
      player.score = 0
    })

    this.setState({
      players: currentState
    })
  }

  render() {
    return (
      <>
        <form>
          <button onClick={(e) => this.updatePlayers(e, this.props.numberOfPlayers)}>Click me</button>
          {this.generatePlayers()}
          <button onClick={(e) => { this.props.getPlayerInformation(e, this.state.players) }}>STATE</button>
        </form>

      </>
    );
  }
}

export default Players;