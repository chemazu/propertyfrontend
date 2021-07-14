import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import crafts from "../../../data/crafts.json";

import Login from "../login/Content";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      loggedInUser: "",
      userInfo: "",
    };
  }
  handleLogout = () => {
    console.log("logged out");
    localStorage.clear();
    console.log(localStorage);
  };
  handleUpdate = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  };
  handleSubmit = async (e) => {
    let res = await axios.put(
      `${process.env.REACT_APP_PUBLIC_URL}/updateuser/${this.props.loggedInUser._id}`,
      this.state
    );
    let data = await res.data;
    return data;
  };
  render() {
    const { name, email, craft, phone, address } = this.props.loggedInUser;
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar sticky-sidebar user-nav sidebar-left">
                <ul>
                  <li>
                    {" "}
                    <Link className="active" to="/profile">
                      {" "}
                      Edit Profile
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/profile-listings">My Listings</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/profile-saved-listings">
                      Saved Listings
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="logout" to="/" onClick={this.handleLogout}>
                      <i className="flaticon-shut-down-button" /> Logout
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="acr-welcome-message">
                <h3>Welcome Back {name}</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder={name}
                      // defaultValue={name}
                      onChange={this.handleUpdate}
                    />
                  </div>
                  {/* <div className="col-lg-6 form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="randydandy"
                      defaultValue="randydandy"
                    />
                  </div> */}
                  <div className="col-lg-6 form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={email}
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label>Phone Number</label>
                    <input
                      onChange={this.handleUpdate}
                      type="text"
                      className="form-control"
                      placeholder={phone}
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label>Address</label>
                    <input
                      onChange={this.handleUpdate}
                      type="text"
                      className="form-control"
                      placeholder={address}
                    />
                  </div>
                  {/* <div className="col-lg-6 form-group">
                    <label>Address Two</label>
                    <input onChange={this.handleUpdate}
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div> */}
                  <div className="col-lg-4 form-group">
                    <label>Craft</label>
                    <input
                      onChange={this.handleUpdate}
                      name="craft"
                      className="form-control"
                      placeholder={crafts[craft]}
                    />
                  </div>
                  <div className="col-lg-8 form-group">
                    <label>About Me</label>
                    <textarea
                      name="about"
                      rows={4}
                      className="form-control"
                      placeholder="About Me"
                    />
                  </div>
                </div>
                <button type="submit" name="submit" className="btn-custom">
                  Save Changes
                </button>
              </form>
              <hr />
              <div className="acr-welcome-message">
                <h3>Security</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <label>Password</label>
                    <input
                      onChange={this.handleUpdate}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <label>Repeat Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Repeat Password"
                    />
                  </div>
                  <div className="col-lg-12 form-group">
                    <label>Upload Your ID</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="propertyThumbnail"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="propertyThumbnail"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-custom">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
