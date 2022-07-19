import { Link } from "react-router-dom";

import "../assets/css/login.css";
import loginImage from "../assets/img/secure_login.svg";

const Login = () => {
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
                    <form className='login-form'>
                        <div className='form-group'>
                            <label htmlFor='email'> user ID</label>
                            <input
                                type='email'
                                id='email'
                                className='form-control'
                                name='email'
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
