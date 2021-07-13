import React, { useState, useEffect, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/listinggrid/Content";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Listinggrid() {
  const [listing, setListing] = useState("0");
  useEffect(() => {
    getListing();
  }, []);
  let { id } = useParams();
  const getListing = async () => {
    let res = await axios.get(`/listing/listings/${id}`, {});
    let data = await res.data;
    console.log(data);
    setListing(data);
    console.log(listing);
  };
  return (
    <Fragment>
      <MetaTags>
        <title>PropertyLens Real Estate | Listing Grid</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: `Listing: ${id}` }} />
      <Content listing={listing} />
      <Footer />
    </Fragment>
  );
}
