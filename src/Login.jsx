import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="" placeholder="Password" id="password" name="password" />
                <label type="checkbox" className="forget">Remember Me<a className="forget" >Forget Password?</a></label>                     
                <button className="login" type="submit">Log In</button>
            </form>

                <label className="forget">Don't have an account?<a className="forget" onClick={() => props.onFormSwitch('register')}>Register</a></label>             
        </div>
    )
}