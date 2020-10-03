import React, { Component } from 'react';

class Players extends Component {
  constructor() {
    super();
    this.state = {
      player: [
        {
          name: "",
          avatar: "url",
        },
        {
          name: "",
          avatar: "url",
        },
        {
          name: "",
          avatar: "url",
        },
        {
          name: "",
          avatar: "url",
        },
      ],
    };
  }

  generatePlayers = (numberOfPlayers) => {
    let players = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      players.push(i);
    }
    return (
      <div>
        {players.map((player) => {
          return <input id={player + 1} />;
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
            {this.generatePlayers(this.props.numberOfPlayers)}
        </form>
    );
  }
}

export default Players;