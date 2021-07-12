import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/submit-request/Content";

class Submitrequest extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>PropertyLens Real Estate | Submit Listing</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "Create Property Request" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Submitrequest;
