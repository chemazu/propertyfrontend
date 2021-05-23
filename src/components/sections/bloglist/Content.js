import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { blogblock } from "../../../data/blog.json";
import Sidebar from "../../layouts/Blogsidebar";
import classNames from "classnames";
import Loader from "../../layouts/Loader";
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

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  dots: true,
  dotsClass: "d-flex slick-dots",
};

function Content(props) {
  return (
    <div className="acr-auth-container">
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
      <div className="acr-auth-content">
        <div className="auth-text">
          <h3>
            Before proceeding, please check your email for a verification link.
          </h3>
          <p>
            If you did not receive the email, click here to request another.
          </p>
        </div>
        <div className="auth-seperator">
          <span>OR</span>
        </div>

        <p className="text-center mb-0">
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
}
export default Content;
