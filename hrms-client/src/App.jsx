import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/common.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Register from "./components/Register";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
