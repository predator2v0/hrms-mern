import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../assets/css/register.css";
import registerImage from "../assets/img/register.svg";
const Register = () => {
    // TODO: implement client side validation for the registration form.
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
    });
    // handle the onChange event for the form inputs. stores the values of form input in the state variable.
    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [key]: value });
    };
    // handle the click for submit button. sends the data to server.
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const userRegistered = await axios.post(
                "http://localhost:7777/register",
                user,
                {
                    "Content-type": "application/json",
                }
            );
            if (userRegistered) {
                window.alert(userRegistered.data.msg);
                setUser({
                    name: "",
                    email: "",
                    mobile: "",
                    password: "",
                    cpassword: "",
                });
                navigate("/login"); // redirecting to login page after successful registration.
            }
        } catch (err) {
            console.log(err.response.data.msg);
            window.alert(err.response.data.msg);
        }
    };
    return (
        <div className='register component-shadow'>
            <div className='register-container'>
                <div className='register-form-container'>
                    <h5>Sign Up</h5>
                    <form className='register-form'>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                placeholder='Name'
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                placeholder='Email'
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='tel'
                                className='form-control'
                                name='mobile'
                                placeholder='Contact no.'
                                value={user.mobile}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                placeholder='Password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-control'
                                name='cpassword'
                                placeholder='Confirm Password'
                                value={user.cpassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <button
                                type='submit'
                                name='submit'
                                className='btn signup-btn'
                                value='Sign Up'
                                onClick={registerUser}
                            >
                                submit
                            </button>
                        </div>
                    </form>
                    <p className='login-link'>
                        Already have an account? <Link to='/login'>Log In</Link>{" "}
                        here.
                    </p>
                </div>
                <div className='register-image-container'>
                    <img
                        src={registerImage}
                        alt='register img'
                        className='register-image'
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
