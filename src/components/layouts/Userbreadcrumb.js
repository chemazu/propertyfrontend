import React, { Component } from "react";
import { Link } from "react-router-dom";

class Userbreadcrumb extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: { name: "User", email: "user@thepropertylens.com" },
    };
  }
  // componentWillMount() {
  //   //   loggedin
  //   this.setState({
  //     loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")),
  //   });
  //   console.log("mounteed", localStorage.getItem("loggedInUser"));
  // }
  render() {
    const { loggedInUser } = this.props || this.state.loggedInUser;
    console.log(loggedInUser);
    return (
      <div
        className="subheader subheader-2 user-subheader bg-cover bg-center"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/assets/img/subheader-2.jpg)",
        }}
      >
        <div className="container">
          <div className="media">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/people/1.jpg"}
              alt="agent"
            />
            <div className="media-body">
              <h3 className="text-white">{loggedInUser.name}</h3>
              <span className="user-email">{loggedInUser.email}</span>
            </div>
            <Link to="/submit-listing" className="btn-custom secondary mr-0">
              Submit Listing <i className="fas mr-0 fa-plus" />{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Userbreadcrumb;
