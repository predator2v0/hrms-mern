import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/login.css";
import loginImage from "../assets/img/secure_login.svg";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = async (e) => {
        e.preventDefault();
        try {
            const userLoggedIn = await axios.post(
                "http://localhost:7777/login",
                {
                    email,
                    password,
                },
                { "Content-Type": "application/json" }
            );
            if (userLoggedIn) {
                window.alert(userLoggedIn.data.msg);
                navigate("/dashboard");
            }
        } catch (err) {
            console.log(err.response.data.msg);
            window.alert(err.response.data.msg);
        }
    };
    return (
        <div className='login component-shadow'>
            <div className='login-container '>
                <div className='login-image-container'>
                    <img
                        src={loginImage}
                        alt='login img'
                        className='login-image'
                    />
                </div>
                <div className='login-form-container'>
                    <h3>Log In</h3>
                    <form method='POST' className='login-form'>
                        <div className='form-group'>
                            <label htmlFor='email'> user ID</label>
                            <input
                                type='email'
                                id='email'
                                className='form-control'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='example@email.com'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>password</label>
                            <input
                                type='password'
                                id='password'
                                className='form-control'
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='********'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='submit'
                                id='submit'
                                className='btn login-btn'
                                name='submit'
                                value='Log In'
                                onClick={userLogin}
                            />
                        </div>
                    </form>
                    <p className='register-link'>
                        Don't have an account?{" "}
                        <Link to='/register'>register</Link> here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
