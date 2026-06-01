import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";

function App() {
    return (
        <BrowserRouter>
            {/* <Navbar/> */}
            <Routes>
                <Route path='/' element={<Navigate to='/portfolio' replace />} />
                <Route path='/portfolio' element={<Home />} />
                {/* <Route path='/about-me' element={<AboutMe />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Socials />} /> */}
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;