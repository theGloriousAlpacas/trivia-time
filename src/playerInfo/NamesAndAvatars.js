import React, { Component } from 'react';
import Category from '../Category';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NameAndAvatars extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            isShowingAvatars: false
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
                name: '',
                score: 0,
                valid: false
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

    handleChange = (e) => {
        let index = e.target.id - 1;
        let name = e.target.value;
        this.setState((state) => {
            state.players[index].valid = (name && name.length !== 0);
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let formIsValid = this.validateForm(this.state.players);
        this.props.playerInformation(this.state.players, formIsValid);
       
        if (formIsValid) {
            for(let i=0; i<e.target.length-1; i++) {
                let index = e.target[i].id - 1;
                let name = e.target[i].value;
                this.setState((state) => {
                    state.players[index].name = name;
                });         
            }
        } else {
            alert("Slow your roll! Enter some names first!");
        }
    };

    validateForm = (players) => {
        for(let i=0; i< players.length; i++) {
            if(!players[i].valid) {
                return false;
            }
        }
        return true;
    }

    generatePlayers = () => {
        if (this.state.isShowingAvatars) {
            const players = this.state.players;
            return ( 
                <div className="playerSetupContainer">
                    {players.map((player) => {
                        return (
                            <div key={player.id} className="playerInfoInput">
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
            <form onSubmit={this.handleFormSubmit} className="numberOfPlayersSubmit">
              {this.generatePlayers()}
              {!this.state.isShowingAvatars 
                    ? (<button type="button" onClick={(e) => this.updateState(e, this.props.numberOfPlayers)}>Double Check You Have Enough Friends!</button>) 
                    : (<button type="submit">Let's Battle!</button>)
              }
            </form>
          </div>
        );
    }
}

export default NameAndAvatars;











