import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

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
// let history = useHistory();

class Content extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      accountType: "",
      craft: "",
      phone: "",
      address: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      `${process.env.REACT_APP_PUBLIC_URL}/register`,
      this.state
    );
    let data = await res.data;
    console.log(data);
    // if (data.success) {
    //   history.push(path);
    // }
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
    const { name, email, password, accountType, craft, phone, address } =
      this.state;
    return (
      <div className="acr-auth-container">
        <div className="acr-auth-content">
          <form onSubmit={this.handleSubmit}>
            <div className="auth-text">
              <h3>Create A PropertyLens Account</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control form-control-light"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address </label>
              <input
                type="email"
                className="form-control form-control-light"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password </label>
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
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control form-control-light"
                placeholder="Phone Number"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control form-control-light"
                placeholder="Address"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Select Account Type</label>
              <select
                name="accountType"
                // id="cars"
                className="form-control form-control-light"
                value={accountType}
                onChange={this.handleChange}
              >
                <option value="0">Account Type :</option>
                <option value="1">Craftsmen</option>
                <option value="2">Agent</option>
                <option value="3">Property Seeker</option>
                <option value="4">Premium</option>
              </select>
            </div>
            <div className="form-group">
              <label>Select Crafts</label>
              <p>For Craftsmen</p>
              <select
                name="craft"
                id="cars"
                className="form-control form-control-light"
                value={craft}
                onChange={this.handleChange}
              >
                <option value="0">Choose your Trade :</option>
                <option value="1"> Architects</option>
                <option value="2">Building Engineers and Contractors</option>
                <option value="3">Carpentry, Furniture and Wood works</option>
                <option value="4">Electrical Engineers and Technicians </option>
                <option value="5">Estate Surveyors and Valuers</option>
                <option value="6">Roofing Experts.</option>
                <option value="7">Information Technology Consultants</option>
                <option value="8">Interior Decoration Experts </option>
                <option value="9">Landscape Artists</option>
                <option value="10">Legal Experts</option>
                <option value="11">Logistics and Relocation Experts.</option>
                <option value="12">Masonry</option>
                <option value="13"> Materials MerchantsO. Painters</option>
                <option value="14">
                  {" "}
                  Plaster of Paris and Ceiling finishing
                </option>
                <option value="15"> Plumbers</option>
                <option value="16"> Quantity Surveyors</option>
                <option value="17">Security Systems Consultants</option>
                <option value="18"> Tiles and Floor Experts</option>
                <option value="19">Windows and wall Partition Experts</option>
              </select>
            </div>

            <button type="submit" className="btn-custom secondary btn-block">
              Register
            </button>
            <div className="auth-seperator">
              <span>OR</span>
            </div>
            {/* <div className="social-login">
              <button type="button" className="acr-social-login facebook">
                <i className="fab fa-facebook-f" /> Continue with Facebook{" "}
              </button>
              <button type="button" className="acr-social-login google">
                <i className="fab fa-google" /> Continue with Google
              </button>
            </div> */}
            <p className="text-center mb-0">
              Already have an account? <Link to="/login">Login</Link>{" "}
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
