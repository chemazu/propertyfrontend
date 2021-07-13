import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumb";
import Footer from "../layouts/Footer";
import Content from "../sections/agent-archive/Content";

export default function Agentarchive() {
  const { id } = useParams();
  return (
    <Fragment>
      <MetaTags>
        <title>PropertyLens Real Estate | Agent Archive</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Agent Archive" }} />
      <Content />
      <Footer />
    </Fragment>
  );
}
