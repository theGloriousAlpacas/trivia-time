import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class ScoreBoard extends Component {

    render() {

        let localPlayers = this.props.playerInformation;
        localPlayers.sort((a, b) => b.score - a.score);

        return (
            <section className="finalResults">

                <div className="scoreBoard">
                    <h2>Results</h2>
                    <div className="scoreList">
                        <ul>
                            {localPlayers.map((player, index) => {

                                const name = player.name;
                                const score = player.score;
                                
                                return (
                                    <li key={index}>
                                        <div className="results">
                                            <h3>{name}</h3>
                                            <p>{score}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <button className="replay" onClick={this.props.handleReset}>
                        <Link to="/">
                            Quiz Your Friends Again!
                        </Link>
                    </button>

                    {/* <Link className="replay" to="/" onClick={this.props.handleReset}>Quiz Your Friends Again!</Link> */}
                </div>
            </section>
        )
    }
}
export default ScoreBoard;