import { Link } from "react-router-dom";
import "../assets/css/register.css";
import registerImage from "../assets/img/register.svg";
const Register = () => {
    return (
        <div className='register component-shadow'>
            <div className='register-container'>
                <div className='register-form-container'>
                    <h5>Sign Up</h5>
                    <form action='' className='register-form'>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                id='name'
                                placeholder='Name'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                placeholder='Email'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='tel'
                                className='form-control'
                                id='mobile'
                                placeholder='Contact no.'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                placeholder='Password'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='password'
                                className='form-control'
                                id='cpassword'
                                placeholder='Confirm Password'
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='submit'
                                id='submit'
                                className='btn signup-btn'
                                name='submit'
                                value='Sign Up'
                            />
                        </div>
                    </form>
                    <p className='login-link'>
                        Already have an account?{" "}
                        <Link to='/login'>Log In</Link> here.
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
