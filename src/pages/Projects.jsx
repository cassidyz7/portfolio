import React from "react";

import style from "/src/styles/Projects.module.css";

import c_logo from "/src/assets/C_Logo.png";

import background_port from "/src/assets/background-port.png";
import platform_thumb from "/src/assets/platform_thumb.png";
import cpu_thumb from "/src/assets/cpu_thumb.png";
import thumb_3d from "/src/assets/3d_thumb.png";


export default function Projects() {
    return (
        <div>
            <title>Projects | Zachary Cassidy's Portfolio</title>
            {/* This should be the standard format for each project whenever I add one*/}
            <div className={style.project}>
                <img src={platform_thumb} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>Custom Platforming Engine</h1>
                    <h3>Built in C++ using the SDL3 library for graphics, this engine is still a work in progress. This is my longest running project and the one I am the
                        most proud of. Everything besides the graphics was written from scratch: the physics system, the collision detection, sending keyboard inputs to the player, all of it
                        hand made. I plan to utilize it in future projects once it is complete.
                    </h3>
                    <a href="https://github.com/cassidyz7/platformer-v2.0" className={style.projButton} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>
                
            <div className={style.project}>
                <img src={cpu_thumb} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>Simple Assembly and CPU</h1>
                    <h3>This was created to become more familiar with the process of designing and implementing a CPU based on specifications for an assembly language. 
                        The assembly language used was also created for this, as I wanted a simplified and more stripped down version of MIPS, which was being used in my CSCI 250: Concepts of Computer Systems course. 
                        This was a way for me to both work on an interesting and fun project while also studying for the exam on this material.</h3>
                    <a href="https://github.com/cassidyz7/Assembly-and-CPU" className={style.projButton} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>

            <div className={style.project}>
                <img src={thumb_3d} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>Basic 3D Renderer</h1>
                    <h3>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h3>
                    <a href="https://github.com/cassidyz7/3DEngine" className={style.projButton} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>

            <div className={style.project}>
                <img src={background_port} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>Portfolio Website</h1>
                    <h3>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h3>
                    <a href="https://github.com/cassidyz7/portfolio" className={style.projButton} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>
        </div>
    );
}