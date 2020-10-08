// This will take info from NumberOf Players & Names & Avatars

import React, { Component } from "react";
import NumberOfPlayers from "./NumberOfPlayers.js";
import NamesAndAvatars from "./NamesAndAvatars.js";
import Category from "../Category.js";

class PlayerInformation extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            numberOfPlayers: 0,
            goToCategory: false,
            goToPlay: false
        }
    }
    getNumberOfPlayers = (numberOfPlayers) => {
        this.setState({
            numberOfPlayers: numberOfPlayers
        })
    }
    getPlayerInformation = (players, formIsValid) => {
        this.setState({
            players: players,
            goToCategory: formIsValid
        })
    }

    render() {
        return (
            <div>
                <NumberOfPlayers numberOfPlayers={this.getNumberOfPlayers} />
                <NamesAndAvatars numberOfPlayers={this.state.numberOfPlayers} playerInformation={this.getPlayerInformation} />
                {this.state.goToCategory === true 
                    ? (<Category playerInfo={this.state.players} getPlayerInformation={this.props.getCategory} />) 
                    : null}
            </div>
        )
    }
}
export default PlayerInformation;