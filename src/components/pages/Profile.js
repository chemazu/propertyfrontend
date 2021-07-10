import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Userbreadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/profile/Content";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: "",
    };
  }
  async componentWillMount() {
    const token = JSON.parse(localStorage.getItem("authtoken")) || null;
    let res = await axios.get(`/user/${token.userId}`, {
      headers: { Authorization: `Bearer ${token.token}` },
    });
    let data = await res.data;
    let loggedInUser = data.data;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    this.setState({
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")),
    });
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>PropertyLens Real Estate | My Account</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb loggedInUser={this.state.loggedInUser} />
        <Content loggedInUser={this.state.loggedInUser} />
        <Footer />
      </Fragment>
    );
  }
}

export default Profile;
