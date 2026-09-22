import React from "react";
import NavbarButton from "../components/NavbarButton";

import style from "/src/styles/Home.module.css";

import background from "/src/assets/background-port.png";
import c_logo from "/src/assets/C_Logo.png";
import html from "/src/assets/html5.webp";
import java from "/src/assets/java.webp";
import python from "/src/assets/python.webp";

export default function Home() {
    return (
        <div>
            <div className={style.intro}>
                <div className={style.introText}>
                    <h1 className={style.name}>Hi, I'm Zachary Cassidy</h1>
                    <h3 className={style.subtitle}>3rd year college student aspiring for Software Engineering Co-Op</h3>
                </div>
                <img className={style.tunnel} src={background} alt="A tunnel that is curving from the left to the right, with ones and zeros lining the walls."></img>
            </div>
            <div className={style.section2}>
                {/* maybe a little blurb about me? like how old I am, where i go to school, that kinda thing */}
                {/* just enough so they can learn a bit about me so they can be intrigued and want to look at more stuff */}
                <div className={style.boxed} id="blurb">
                    <h4 className={style.heading}>A little about me...</h4>
                    <p className={style.subheading}>I'm 20 years old and am a Computer Science student at RIT. Most of my project ideas come from a single thought: 
                        "Man, it would be cool if I could..." which triggers me to go off and learn about whatever it is that interests me. 
                        I love learning by doing and trying new things.</p>
                </div>
                <div className={style.boxed} id="location">
                    <h4 className={style.heading}>Pittsburgh, PA, USA</h4>
                    <p className={style.subheading} >Located in the Greater Pittsburgh area and open to on-site work in both
                    Pittsburgh, PA and Rochester, NY, as well as remote work</p>
                </div>
            </div>
            <div className={style.skills} id="skillsample">
                <div className={style.smallboxed}>
                    <img src={c_logo} className={style.clogo}></img>
                    <h5 className={style.ctext}>C/C++</h5>
                </div>
                <div className={style.smallboxed}>
                    <img src={java} className={style.javalogo}></img>
                    <h5 className={style.ctext}>Java</h5>
                </div>
                <div className={style.smallboxed}>
                    <img src={python} className={style.pythonlogo}></img>
                    <h5 className={style.ctext} >Python</h5>
                </div>
                <div className={style.smallboxed}>
                    <img src={html} className={style.pythonlogo}></img>
                    <h5 className={style.ctext}>JavaScript/HTML/CSS</h5>
                </div>
                <div className={style.skillMore}>
                    <h4 className={style.skillText}>These are just some of my skills,</h4>
                    <NavbarButton to='/about-me' text='Explore the Rest!' className = {style.skillButton}/>
                </div>
            </div>
            <div className={style.explore} id="projects">
                <div className={style.exploreGif}>
                    <p>THIS WILL HOLD A GIF OR SOMETHING ONCE I MAKE IT BUT UNTIL THEN LOREM IPSUM DOLOR SIT AMET</p>
                </div>
                <div className={style.exploreStuff}>
                    <h4 className={style.exploreText}>Explore My Projects</h4>
                    <NavbarButton to='/projects' text='My Projects' className={style.exploreButton}/>
                </div>
            </div>
            <div className="banner" id="contact">
                <h4>Have an idea and want to reach out?</h4>
                <h5>Contact me below!</h5>
            </div>
        </div>
        
    )
}