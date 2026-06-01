import React from "react";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
    return (
        <nav>
            <NavbarButton to='/portfolio' text='Home' /> | {" "}
            <NavbarButton to='/about-me' text='About Me'/> | {" "}
            <NavbarButton to='/projects' text='Projects'/> | {" "}
            <NavbarButton to='/contacts' text='Connect'/>
        </nav>
    );
}