import React, { Component } from 'react';

class ScoreBoard extends Component {
    constructor(){
        super();
        // CONFIRM DATA STRUCTURE IN STATE
        this.state = {
            players: [
                {
                    id: 0,
                    name: 'Anjelica',
                    avatar: 'https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=blue',
                    score: 1
                },
                {
                    id: 1,
                    name: 'Sahil',
                    avatar: 'https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=red',
                    score: 2
                },
                {
                    id: 2,
                    name: 'Danilo',
                    avatar: 'https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=yellow',
                    score: 3
                },
                {
                    id: 3,
                    name: 'Adam',
                    avatar: 'https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=purple',
                    score: 2
                },
                {
                    id: 4,
                    name: 'Shital',
                    avatar: 'https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=orange',
                    score: 2
                },
            ]
        }
    }


    render() {
        
        return (
    
            <div className="scoreBoard">
                <h2>Results</h2>
    
                <div className="scoreList">
                    <ul>
                        {/* Number of li's generated = number of players in the game. This info is in state - need to confirm structure*/}

                        {this.state.players.map((player) => {

                            // Variables for specific pieces of info
                            const name = player.name;
                            const score = player.score;

                            return (
                                <li>
                                    <div className="results">
                                        <h3>{name}</h3>
                                        <p>{score}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
    
                {/* Play Again button - sets state to original state (empty) */}
                <button onClick={this.props.handleReset}>Play again</button>
            </div>
        )
    }
    
}


export default ScoreBoard;