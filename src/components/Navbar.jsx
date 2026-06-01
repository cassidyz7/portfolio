import React from "react";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
    return (
        <nav>
            <NavbarButton to='/' text='Home' /> | {" "}
            <NavbarButton to='/testpage' text='Test Button'/>
        </nav>
    );
}