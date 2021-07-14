import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  console.log(process.env);
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [auth, setAuth] = useState({ email: "", password: "" });
  const { email, password } = auth;
  function handleChange(e) {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let res = await axios.post(
      `${process.env.REACT_APP_PUBLIC_URL}/login`,
      auth
    );
    let data = await res.data;
    localStorage.setItem("authtoken", JSON.stringify(data));
    if (data.success) {
      history.push("/profile");
    } else {
      console.log("error");
    }
  }
  return (
    <div className="acr-auth-container">
      <div className="acr-auth-content">
        <form onSubmit={handleSubmit}>
          <div className="auth-text">
            <h3>Log Into PropertyLens</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control form-control-light"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control form-control-light"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            {/* <Link to="#" className="forgot-password">
              Forgot Password?
            </Link> */}
            <a className="forgot-password" href="/#">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn-custom secondary btn-block">
            Login
          </button>
          <div className="auth-seperator">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="acr-social-login facebook">
              <i className="fab fa-facebook-f" /> Continue with Facebook{" "}
            </button>
            <button type="button" className="acr-social-login google">
              <i className="fab fa-google" /> Continue with Google
            </button>
          </div>
          <p className="text-center mb-0">
            Don't have an account? <a href="/register">Create One</a>{" "}
          </p>
        </form>
      </div>
      <div className="acr-auth-bg">
        <div
          className="acr-auth-bg-slider acr-cs-bg-slider"
          style={{ backgroundColor: "orange" }}
        ></div>
      </div>
    </div>
  );
}
