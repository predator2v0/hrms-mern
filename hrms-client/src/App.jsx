import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./assets/css/common.css";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
