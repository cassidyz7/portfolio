import React from "react";

import style from "/src/styles/Footer.module.css";


import email from "/src/assets/email.png";
import github from "/src/assets/github.png";
import linkedin from "/src/assets/linkedin.png";

export default function Footer() {
    return (
    <div className={style.contact} id="contact">
        <h7>Contact me below!</h7>
        <div className={style.horiz}>
            <a href="https://www.github.com/cassidyz7" target="_blank" rel="noopener noreferrer"><img src={github} className={style.linkbox}></img></a>
            <a href="mailto:cassidyzachary7@gmail.com" rel="noopener noreferrer"><img src={email} className={style.linkbox}></img></a>
            <a href="https://www.linkedin.com/in/zachary-cassidy-18263b385" target="_blank" rel="noopener noreferrer"><img src={linkedin} className={style.linkbox}></img></a>
        </div>
    </div>
    )
}
