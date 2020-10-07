import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


class ScoreBoard extends Component {

    render() {
        
        return (

            <section className="results">
                <div className="scoreBoard">
                    <h2>Results</h2>
        
                    <div className="scoreList">
                        <ul>
                            {/* Number of li's generated = number of players in the game. This info is in state - need to confirm structure*/}
                        {this.props.playerNumber.map((player) => {

                            {this.state.players.map((player) => {

                                // Variables for specific pieces of info
                                const name = player.name;
                                const score = player.score;

                                return (
                                    <li>
                                        <div className="playerScores">
                                            <h3>{name}</h3>
                                            <p>{score}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
    
    
                {/* Play Again button - sets state to original state (empty) */}
                <button onClick={this.props.handleReset}><Link to="/">Play Again?</Link></button>
            </div>
        )
    }
    
}


export default ScoreBoard;