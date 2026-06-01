import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import TestPage from "./TestPage";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/testpage' element={<TestPage />} />
            </Routes>
        
        
        </BrowserRouter>
        
    );
}

export default App;