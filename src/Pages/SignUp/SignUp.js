import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/google_logo.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [customError, setCustomError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmit = event => {
        event.preventDefault();
        console.log('submitted', email, password, confirmPassword);
        if (password !== confirmPassword) {
            setCustomError('Password should match!');
            return;
        }
        if (password.length < 6) {
            setCustomError('Password should longer than 6 characters!');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/');
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit} className='contianer w-50 mx-auto mt-5 border border-secondary p-3 rounded-3'>
            <h1 className='text-center text-primary'>Please SignUp</h1>
            <div className="form-floating mb-3">
                <input onBlur={handleEmailBlur} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input onBlur={handlePasswordBlur} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" required />
                <label htmlFor="floatingPassword">Confirm Password</label>
            </div>

            {
                customError && <p className='text-danger'>{customError}</p>
            }

            <button type="submit" className="btn btn-outline-dark ms-0">Sign Up</button>
            {
                error && <p className='text-danger'>{error}</p>
            }
            {
                loading && <p className='text-success'>Loading............</p>
            }
            <div className='text-center mt-3'>
                <h4>or</h4>
                <hr />
                <button type="button" className="btn btn-outline-dark"><img height='40px' width='100%' src={logo} alt="" /></button>
            </div>
            <div className='text-center mt-3'>
                <p>
                    Already have an account? <Link className='text-primary' to="/login">Login</Link>
                </p>
            </div>
        </form>
    );
};

export default SignUp;