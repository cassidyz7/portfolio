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
                    <h1>This is a title!!!!!</h1>
                    <h3>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h3>
                    <a href="" className={style.projButton}>I don't go anywhere yet but i will go to the github for the thing!!!!</a>
                </div>
            </div>
                
            <div className={style.project}>
                <img src={cpu_thumb} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>This is a title!!!!!</h1>
                    <h3>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h3>
                    <a href="" className={style.projButton}>I don't go anywhere yet but i will go to the github for the thing!!!!</a>
                </div>
            </div>

            <div className={style.project}>
                <img src={thumb_3d} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>This is a title!!!!!</h1>
                    <h3>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h3>
                    <a href="" className={style.projButton}>I don't go anywhere yet but i will go to the github for the thing!!!!</a>
                </div>
            </div>

            <div className={style.project}>
                <img src={background_port} className = {style.projPic}></img>
                <div className={style.projText}>
                    <h1>This is a title!!!!!</h1>
                    <h3>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet lorem ipsum dolor sit amet</h3>
                    <a href="" className={style.projButton}>I don't go anywhere yet but i will go to the github for the thing!!!!</a>
                </div>
            </div>
        </div>
    );
}