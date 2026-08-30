import React from "react";
import NavbarButton from "./NavbarButton";

import barstyles from "/src/styles/Navbar.module.css";
import buttonstyles from "/src/styles/NavbarButton.module.css"

export default function Navbar() {
    return (
        <nav className={barstyles.nav}>
            <p className={barstyles.hidden}>this is to push the buttons over if you found this congratulations or something lalalala i need a bit more rooooom this is good</p>
            <NavbarButton className={buttonstyles.navlink} to='/portfolio' text='Home' />
            <NavbarButton className={buttonstyles.navlink} to='/about-me' text='About Me'/>
            <NavbarButton className={buttonstyles.navlink} to='/projects' text='Projects'/>
        </nav>
    );
}