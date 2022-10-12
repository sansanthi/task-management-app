import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth"

export default function SignUp() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setUser(prevUser=> ({...prevUser, [e.target.name]: e.target.value}))
    }
   const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        setError('')
        await(signup(user.email, user.password))
        navigate('/')
    } catch {
        setError('Failed to create account')
    }
  };
  return (
    <div className="login-card">
      <h1>SignUp</h1>
      {error && <p>{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="login-btn">
          Sign Up
        </button>
      </form>
      <p>
        You doesn't have already account?
        <span className="register-link"><Link to="/login">Login</Link></span>
      </p>
    </div>
  );
}
