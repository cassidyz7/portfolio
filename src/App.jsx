import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.DEV ? '/' : '/my-repo-name'}>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Navigate to='/portfolio' replace />} />
                <Route path='/portfolio' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about-me' element={<AboutMe />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    );
}

export default App;