import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Userbreadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/profile-saved-listings/Content";

class Profilesavedlistings extends Component {
  render() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    return (
      <Fragment>
        <MetaTags>
          <title>PropertyLens Real Estate | My Products</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb loggedInUser={loggedInUser} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Profilesavedlistings;
