import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/google_logo.png';
const Login = () => {
    return (
        <form className='contianer w-50 mx-auto mt-5 border border-secondary p-3 rounded-3 shadow-lg'>
            <h1 className='text-center text-primary'>Please Login</h1>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button type="button" className="btn btn-outline-dark ms-0">Login</button>

            <div className='text-center mt-3'>
                <h4>or</h4>
                <hr />
                <button type="button" class="btn btn-outline-dark"><img height='40px' width='100%' src={logo} alt="" /></button>
            </div>
            <div className='text-center mt-3'>
                <p>
                    New to Ema-John? <Link className='text-primary' to="/signup">Create an account</Link>
                </p>
            </div>
        </form>
    );
};

export default Login;