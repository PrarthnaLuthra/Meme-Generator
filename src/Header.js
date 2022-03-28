import React from "react";
import logo from "./images/meme_logo.png"

export default function Header(){
    return(
        <header className="Header">
        <img src={logo} className="logo"/>
        <h2 className="heading">Meme Generator</h2>
        </header>
    )
}