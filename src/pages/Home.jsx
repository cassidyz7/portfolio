import React from "react";
import NavbarButton from "../components/NavbarButton";

import style from "/src/styles/Home.module.css";

import background from "/src/assets/background-port.png";

export default function Home() {
    return (
        <div>
            <div className={style.intro}>
                <div className={style.introText}>
                    <h1 className={style.name}>Hi, I'm Zachary Cassidy</h1>
                    <h3 className={style.subtitle}>3rd year college student aspiring for Software Engineering Co-Op</h3>
                </div>
                <img src={background} alt="this didnt load"></img>
            </div>
            <div className="boxed" id="duration">
                <h4>Years doing programming: 9+ years</h4>
                <p>Self-taught until high school and college</p>
            </div>
            <div className="boxed" id="location">
                <h4>Pittsburgh, PA, USA</h4>
                <p>Located in the Greater Pittsburgh area and open to on-site work in both
                   Pittsburg, PA and Rochester, NY, as well as remote work</p>
            </div>
            <div className="banner" id="skillsample">
                <h4>My Skills</h4>
                <h5>C/C++</h5>
                <h5>Java</h5>
                <h5>Python</h5>
                <h5>JavaScript/HTML/CSS</h5>
                <p>And more!</p>
                <NavbarButton to='/about-me' text='About Me' />
            </div>
            <div className="banner" id="projects">
                <h4>Explore My Projects</h4>
                <NavbarButton to='/projects' text='Projects' />
            </div>
            <div className="banner" id="contact">
                <h4>Have an idea and want to reach out?</h4>
                <h5>Contact me below!</h5>
                <NavbarButton to='/contacts' text='Reach out' />
            </div>
        </div>
        
    )
}