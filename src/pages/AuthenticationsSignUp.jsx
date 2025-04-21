import React, { useState } from 'react';
import './AuthenticationsSignUp.css'
import { auth, provider, faceProvider } from '../../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthenticationsSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    let nav = useNavigate()

    const handleGoogleBtn = async () => {

        const result = await signInWithPopup(auth, provider);
        console.log(result.user.displayName);
        console.log(result.user.email);
        nav('/showdata')

    }
    const handleFacebookBtn = async () => {
        // const result = await signInWithPopup(auth, faceProvider); 
        alert("hello facebook")
    }
    const handleSubmit = () => {
        alert("only google with sign-up");

    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: 400, width: "100%" }}>
                <h4 className="text-center mb-3 fs-3">Sign Up</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group border rounded-2">
                            <input id="password" className="form-control hello" placeholder="Enter your password" required type={showPassword ? "text" : "password"} />
                            <button type="button" className="input-group-text bg-white border-0" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", background: "transparent", borderLeft: "none" }}>
                                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
                <div className="text-center my-3">OR</div>
                <button type="button" className="btn btn-outline-danger social-btn mb-2 " onClick={handleGoogleBtn}>
                    <i className="bi bi-google me-2"></i> Sign up with Google
                </button>
                <button type="button" className="btn btn-outline-primary social-btn" onClick={handleFacebookBtn}>
                    <i className="bi bi-facebook me-2"></i> Sign up with Facebook
                </button>
                <p className="mt-3 text-center">
                    Already have an account? <a href="#">Login</a>
                </p>
            </div>
        </div>
    );
}
export default AuthenticationsSignUp;
