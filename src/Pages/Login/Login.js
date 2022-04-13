import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/google_logo.png';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log('submitted', email, password);
        signInWithEmailAndPassword(email, password);

    }
    if (user || user1) {
        navigate('/');
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className='contianer w-50 mx-auto mt-5 p-3 rounded-3 shadow-lg'>
            <h1 className='text-center text-primary'>Please Login</h1>
            <div className="form-floating mb-3">
                <input onBlur={handleEmailBlur} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input onBlur={handlePasswordBlur} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <input type="submit" className="btn btn-outline-dark ms-0" value="Login" />
            {
                error && <p className="text-danger">{error}</p>
            }
            <div className='text-center mt-3'>
                <h4>or</h4>
                <hr />
                <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-dark"><img height='40px' width='100%' src={logo} alt="" /></button>
            </div>
            <div className='text-center mt-3'>
                <p>
                    New to <span className='text-warning text-bold'>Best Tour Plan?</span> <Link className='text-primary' to="/signup">Create an account</Link>
                </p>
            </div>
        </form>
    );
};

export default Login;