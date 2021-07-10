import React, { Component, Fragment } from "react";
import Listingwrapper from "./Listingwrapper";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Listingwrapper id={this.props.id} />
      </Fragment>
    );
  }
}

export default Content;
