import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import Socials from "./Socials";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/portfolio' element={<Home />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Socials />} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;