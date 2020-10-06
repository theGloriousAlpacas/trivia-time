import React, { Component } from 'react';
import logo from './triviaTimeLogo.png';

// Function component because all it will do is display info on the page

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="headerContainer">
                    <img src={logo} className="logo" alt="Trivia Time logo"/>
                    <h1>Fight your friends in a battle of wits!</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;