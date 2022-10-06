import { Fragment } from 'react';
import '../scss/login.scss';

export default function Login() {
    return (
        <div className="login-card">
            <h1>Login</h1>
            <form className='login-form'>
                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' placeholder='Email'/>
                </div>
                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' placeholder='Password'/>
                </div>
                <button type='submit' className='login-btn'>Login</button>
            </form>
            <p>You doesn't have already account? <span className="register-link">Register</span> </p>
        </div>
    )
}