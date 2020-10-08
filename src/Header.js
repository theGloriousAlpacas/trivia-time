import React, { Component } from "react";
import logo from "./triviaTimeLogo.png";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="headerContainer">
                    <img src={logo} className="logo" alt="Trivia Time logo"/>
                    <h1><span>Fight your friends</span> <span>in a battle of wits!</span></h1>
                </div>
            </div>
        </header>
    )
}

export default Header;