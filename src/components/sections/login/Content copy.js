import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const images = [
  {
    img: "assets/img/coming-soon/1.jpg",
    title: "Quote of the day",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    img: "assets/img/coming-soon/2.jpg",
    title: "Quote of the day",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    img: "assets/img/coming-soon/3.jpg",
    title: "Quote of the day",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

class Content extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    fetch("http://localhost:5000/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },

      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots: true,
      dotsClass: "d-flex slick-dots",
    };
    const { email, password } = this.state;

    return (
      <div className="acr-auth-container">
        <div className="acr-auth-content">
          <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <Link to="#" className="forgot-password">
                Forgot Password?
              </Link>
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
              Don't have an account? <Link to="/register">Create One</Link>{" "}
            </p>
          </form>
        </div>
        <div className="acr-auth-bg">
          <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
            {images.map((item, i) => (
              <div key={i}>
                <div
                  className="acr-cs-bg-item bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(" + process.env.PUBLIC_URL + "/" + item.img + ")",
                  }}
                >
                  <div className="acr-auth-quote">
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Content;