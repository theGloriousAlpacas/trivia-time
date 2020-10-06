// Mini App.js that will take info from NumberOf Players & Names & Avatars

import React, { Component } from "react";
import NumberOfPlayers from './NumberOfPlayers.js';
import NamesAndAvatars from './NamesAndAvatars.js';
import Category from "../Category.js";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Playgame from '../Playgame'

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
    getPlayerInformation = (players) => {

        this.setState({
            players: players,
            goToCategory: true
        })
    }
    // getCategory = (e, players) => {
    //     e.preventDefault();
    //     this.setState({
    //         players: players,
    //         goToPlay: true
    //     })
    // }

    render() {
        return (
            <div>
                <NumberOfPlayers numberOfPlayers={this.getNumberOfPlayers} />
                <NamesAndAvatars numberOfPlayers={this.state.numberOfPlayers} playerInformation={this.getPlayerInformation} />
                {this.state.goToCategory === true ? (<Category playerInfo={this.state.players} getPlayerInformation={this.props.getCategory} />) : null}


                {/* <Link to="/play">click here</Link> */}



                {/* // <Route path="/Play" render={(this.state.players) => <Playgame {...this.state.players} title={'Playgame'}/>} /> */}
            </div>
        )
    }
}
export default PlayerInformation;