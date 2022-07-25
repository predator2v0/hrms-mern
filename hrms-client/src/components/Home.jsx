import React from "react";
import "../assets/css/home.css";
import Propertytype from "./subcomponents/Propertytype";

import Search from "./subcomponents/Search";

const Home = () => {
    return (
        <div className='home-component'>
            <Search />
            <Propertytype />
        </div>
    );
};

export default Home;
