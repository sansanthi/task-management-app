import "../scss/login.scss";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { auth } from "../firebase";

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

//   const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(user.email, user.password);
    //   localStorage.setItem(user);
      navigate("/");
    } catch {
      setError("Failed to login");
    }
  };
  return (
    <div className="login-card">
      <h1 className="login">Login</h1>
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
          Login
        </button>
      </form>
      <p>
        You doesn't have already account?
        <span className="register-link"><Link to="/signup">Signup</Link></span>
      </p>
    </div>
  );
}
