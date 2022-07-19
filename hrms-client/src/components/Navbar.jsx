import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-transparent primary-navbar shadow-sm'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                       CC
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/about'>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/login'>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                
        </>
    );
};

export default Navbar;
