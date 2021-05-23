import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/bloglist/Content";

class Bloglist extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>PropertyLens Real Estate | Verify Account</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "Verify Account" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Bloglist;
