import React from "react";

import style from "/src/styles/AboutMe.module.css";

import c_logo from "/src/assets/C_Logo.png";
import html from "/src/assets/html5.webp";
import java from "/src/assets/java.webp";
import python from "/src/assets/python.webp";

import angular from "/src/assets/angular.jpg";
import springboot from "/src/assets/spring-boot.svg";
import react from "/src/assets/react.svg";
import sql from "/src/assets/sql_logo.png";

export default function AboutMe() {
    return (
        <div>
            <title>About Me | Zachary Cassidy's Portfolio</title>
            <div className={style.header}>
                About Me
            </div>
            {/* This is probably just going to be me opening up my brain to yap about myself
            for however long I feel is necesary */}
            <div className={style.blurb}>
                <p>
                    My name is Zachary Cassidy. I'm 20 years old and am a Computer Science student at RIT.
                    I've been interested in programming and computers from a very young age and have always
                    wanted to be able to make incredible programs and software, whether it be fun games or useful projects.
                    <br/><br/>
                    You can probably tell from the varied scope of my projects that have almost no overlap between them
                    that I am driven by learning and trying out new ideas. Almost all of my projects that I do stem from the thought
                    "Man, it would be cool if I could...". That thought then spirals into a hole of research and design to bring the idea
                    as close to reality as I can.
                    <br/><br/>
                    As stated above, I didn't just start programming in college. In addition to taking every programming course my high school
                    offered, I was one of my school's VEX Robotics Competition (VRC) teams for all of my four years in high school. I was on a team with the
                    same people all four years, and for those four years I was the main programmer on the team. With each successive year, we would continually push
                    the boundaries of what we were including on the robot and how advanced the software was, moving from doing the bare minimum to be comp-ready and 
                    basic autonomous motor control to being able to do every task needed for the game and advanced coordinate based directions.
                    In the 2021-2022 season, my team qualified for and competed in the VRC World Championships in Dallas, Texas. While we never made it back
                    to worlds, the lessons we learned from that experience influenced all the robots we built following that year. That same work ethic and 
                    outlook on how to plan out what needs to be done in order to succeed shapes every project that I work on to this day. A single line of code
                    does not get written until a design for the entire structure exists.
                    <br/><br/>
                    If I were to sum up my approach to everything, it is that I am driven by finding new and exciting ideas to research and figure out and I meticulously plan out
                    everything that is going to be in the project before I start. I believe that this is the best way that works for me to pursue new and exciting prospects.
                </p>
            </div>
            {/* This div will hold all the other divs just listing out the 
            skills that I deem useful to include and have reason too.
            probably will limit it to just the various technologies and technical things.*/}
            <div className={style.wrapper}>
                <h3>My Skills</h3>
                <div className={style.skills}>
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

                    <div className={style.smallboxed}>
                        <img src={angular} className={style.pythonlogo}></img>
                        <h5 className={style.ctext}>Angular</h5>
                    </div>

                    <div className={style.smallboxed}>
                        <img src={sql} className={style.javalogo}></img>
                        <h5 className={style.ctext}>SQL</h5>
                    </div>

                    <div className={style.smallboxed}>
                        <img src={springboot} className={style.pythonlogo}></img>
                        <h5 className={style.ctext} >SpringBoot</h5>
                    </div>

                    <div className={style.smallboxed}>
                        <img src={react} className={style.pythonlogo}></img>
                        <h5 className={style.ctext}>React</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}