import React from "react";

import style from "/src/styles/Projects.module.css";

import c_logo from "/src/assets/C_Logo.png";

export default function Projects() {
    return (
        <div>
            <title>Projects | Zachary Cassidy's Portfolio</title>
            {/* This should be the standard format for each project whenever I add one*/}
            <div className={style.project}>
                <img src={c_logo}></img>
                <div>
                    <h5>This is a title!!!!!</h5>
                    <p>This is a really big blob of text describing the thing that is pictured to the left lorem ipsum 
                        dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
                        lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
                    <a href="">I don't go anywhere yet but i will go to the github for the thing!!!!</a>
                </div>
            </div>
            <div className={style.project}>

            </div>
            <div className={style.project}>

            </div>
            <div className={style.project}>

            </div>
        </div>
    );
}