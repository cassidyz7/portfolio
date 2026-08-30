import React from "react";
import NavbarButton from "./NavbarButton";

import barstyles from "/src/styles/Navbar.module.css";
import buttonstyles from "/src/styles/NavbarButton.module.css"

export default function Navbar() {
    return (
        <nav className={barstyles.nav}>
            <NavbarButton className={buttonstyles.navlink} to='/portfolio' text='Home' />
            <NavbarButton className={buttonstyles.navlink} to='/about-me' text='About Me'/>
            <NavbarButton className={buttonstyles.navlink} to='/projects' text='Projects'/>
        </nav>
    );
}