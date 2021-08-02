import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Content from "../sections/confirmation/Content";

class Confirmation extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>PropertyLens Real Estate | Coming Soon</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Content />
      </Fragment>
    );
  }
}

export default Confirmation;
