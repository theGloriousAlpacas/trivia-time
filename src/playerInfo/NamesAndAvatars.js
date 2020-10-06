import React, { Component } from 'react';
import Category from '../Category';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NameAndAvatars extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            isShowingAvatars: false,
            isShowingSubmit: false,
        };
    }

    getAvatars = () => {
        return [
        "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=blue",
        "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=red",
        "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=yellow",
        "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=purple",
        ];
    };

    updateState = (e, numberOfPlayers) => {
        e.preventDefault();
        if(numberOfPlayers !== 0) {
            let players = this.createPlayers(numberOfPlayers);
            this.setState({
                isShowingAvatars: true,
                isShowingSubmit: true,
                players: players
            });
        }
    };

    createPlayers = (numberOfPlayers) => {
        let avatars = this.getAvatars();
        let players = [];    
        avatars = this.shuffleArray(avatars);
        for (let i = 0; i < numberOfPlayers; i++) {
            players.push({
                id: (i + 1).toString(),
                img: avatars[i],
                name: ''
            });
        }
        return players;
    }

    shuffleArray = (array, size) => {
        size = size || array.length;
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array.slice(0,size);
    }

    handleNumberOfUsersClicked() {
        this.setState({isShowingSubmit: true});
    }

    handleSubmitClicked(e) {
        this.setState({isShowingSubmit: false});
    }

    handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.length);
      for(let i=0; i < e.target.length-1; i++) {
        const id = e.target[i].id;
        const name = e.target[i].value;
        this.setState( state => {
            let found = state.players.find(player => player.id === id);
            if(found) {
                found.name = name;
            }
        });
      }
      console.log(this.state.players);
    }

    generatePlayers = () => {
        if (this.state.isShowingAvatars) {
            const players = this.state.players;
            return ( 
                <div>
                    {players.map((player) => {
                        return (
                            <div key={player.id}>
                                <img src={player.img} alt="" />
                                <input onChange={this.handleChange} id={player.id}/>
                            </div>
                        );
                    })}
                </div>
            );
        } else {
            return <></>;
        }
    };

    render() {
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
              {this.generatePlayers()}
              {!this.state.isShowingAvatars 
                    ? (<button type="button" onClick={(e) => this.updateState(e, this.props.numberOfPlayers)}>Click me</button>) 
                    : (<button type="submit" onClick={(e) => this.props.playerInformation(this.state.players)}>Submit</button>)
              }
            </form>
          </div>
        );
    }
}

export default NameAndAvatars;











