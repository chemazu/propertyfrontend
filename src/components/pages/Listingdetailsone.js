import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/listing-details-v1/Content";
import { useParams } from "react-router-dom";

export default function Listingdetailsone() {
  let { id } = useParams();

  return (
    <Fragment>
      {" "}
      <MetaTags>
        <title>PropertyLens Real Estate | Listing Details</title>
        <meta name="description" content="#" />{" "}
      </MetaTags>
      <Header />
      <Content id={id} />
      <Footer />{" "}
    </Fragment>
  );
}
