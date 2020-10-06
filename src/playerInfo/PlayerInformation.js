// Mini App.js that will take info from NumberOf Players & Names & Avatars

import React, { Component } from "react";
import NumberOfPlayers from './NumberOfPlayers.js';
import NamesAndAvatars from './NamesAndAvatars.js';

class PlayerInformation extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            numberOfPlayers: 0,
        }
    }
    getNumberOfPlayers = (numberOfPlayers) => {
        this.setState({
            numberOfPlayers : numberOfPlayers
        })
    }
    getPlayerInformation = (players) => {
        this.setState({
            players: players
        })
    }
    render() {
        return(
            <div>
                <NumberOfPlayers numberOfPlayers={this.getNumberOfPlayers} />
                <NamesAndAvatars numberOfPlayers={this.state.numberOfPlayers} playerInformation={this.getPlayerInformation}/>
            </div>
        )
    }
}
export default PlayerInformation;