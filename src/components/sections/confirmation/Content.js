import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const images = [
  { img: "assets/img/coming-soon/1.jpg" },
  { img: "assets/img/coming-soon/2.jpg" },
  { img: "assets/img/coming-soon/3.jpg" },
];

class Content extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots: true,
      dotsClass: "d-flex slick-dots",
    };
    return (
      <div className="acr-cs-container">
        <div className="acr-cs-content">
          <div className="acr-cs-content-head"></div>
          <div className="acr-cs-content-body">
            <div className="acr-cs-text">
              <div className="acr-dots-wrapper">
                <div className="acr-dots" />
              </div>
              <h1 className="title">
                Thank you for your{" "}
                <span className="custom-primary">Registration</span>{" "}
              </h1>
              <p className="subtitle">
                We have sent you a confirmation email.
                <br /> Please click on the link to activate the account
              </p>
            </div>
            <button
              type="submit"
              className="btn-custom secondary"
              name="button"
            >
              <Link to="/login">Login</Link>
            </button>
            {/* <div className="acr-cs-newsletter">
              <form>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  name="email-newsletter"
                />
                <button
                  type="submit"
                  className="btn-custom secondary"
                  name="button"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
          <div className="acr-cs-content-footer">
            <p>
              {" "}
              Copyright ?? 2020 <Link to="#">PropertyLens</Link> All Rights
              Reserved.{" "}
            </p>
            <ul className="social-media">
              <li>
                {" "}
                <Link to="#">
                  {" "}
                  <i className="fab fa-facebook-f" />{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">
                  {" "}
                  <i className="fab fa-instagram" />{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">
                  {" "}
                  <i className="fab fa-twitter" />{" "}
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="#">
                  {" "}
                  <i className="fab fa-linkedin-in" />{" "}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="acr-cs-bg">
          <Slider className="acr-cs-bg-slider" {...settings}>
            {images.map((item, i) => (
              <div key={i}>
                <div
                  className="acr-cs-bg-item bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(" + process.env.PUBLIC_URL + "/" + item.img + ")",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Content;
