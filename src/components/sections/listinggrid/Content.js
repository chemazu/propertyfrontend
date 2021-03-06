import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip, Dropdown, NavLink } from "react-bootstrap";
import Sidebar from "../../layouts/Shopsidebar";
// import listing from "../../../data/listings.json";
import listing from "../../../data/listingFinal.json";
import classNames from "classnames";
import Loader from "../../layouts/Loader";

const gallerytip = <Tooltip>Gallery</Tooltip>;

const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: listing,
      currentPage: 1,
      itemsPerPage: 6,
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var paginationContent = event.target.closest(".pagination-content");

    if (paginationContent) {
      paginationContent.scrollIntoView();
    }

    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        currentPage: Number(event.target.getAttribute("data-page")),
        loading: false,
      });
    }, 2000);
  }

  render() {
    const { items, currentPage, itemsPerPage } = this.state;
    console.log(this.props.listing.data);
    // Logic for displaying items
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    const currentitems =
      this.props.listing.data || items.slice(indexOfFirstitem, indexOfLastitem);
    const renderitems = currentitems.map((item, i) => {
      return (
        <div key={i} className="col-md-6">
          <div className="listing">
            <div className="listing-thumbnail">
              <Link to="/listing-details-v1/60d98fafff49602c48f50996">
                <img
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    "/uploads/" +
                    item.thumbnail
                  }
                  alt="listing"
                />
              </Link>

              <div className="listing-controls">
                <Link to="#" className="favorite">
                  <i className="far fa-heart" />
                </Link>
                <Link to="#" className="compare">
                  <i className="fas fa-sync-alt" />
                </Link>
              </div>
            </div>
            <div className="listing-body">
              <h5 className="listing-title">
                <Link to={`/listing-details-v1/${item._id}`}>{item.title}</Link>
              </h5>
              <span className="listing-price">
                {item.price}
                {/* {new Intl.NumberFormat().format(item.price.toFixed(2))}${" "} */}
                <p>{item.description}</p>{" "}
              </span>
              <p className="listing-text">{item.text}</p>
              <div className="acr-listing-icons">
                <OverlayTrigger overlay={bedstip}>
                  <div className="acr-listing-icon">
                    <i className="flaticon-bedroom" />
                    <span className="acr-listing-icon-value">{item.beds}</span>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger overlay={bathstip}>
                  <div className="acr-listing-icon">
                    <i className="flaticon-bathroom" />
                    <span className="acr-listing-icon-value">{item.baths}</span>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger overlay={areatip}>
                  <div className="acr-listing-icon">
                    <i className="flaticon-ruler" />
                    <span className="acr-listing-icon-value">
                      {new Intl.NumberFormat().format(item.area)} SQM
                    </span>
                  </div>
                </OverlayTrigger>
              </div>
              <div className="listing-gallery-wrapper">
                <Link
                  to="/listing-details-v1/60d98fafff49602c48f50996"
                  className="btn-custom btn-sm secondary"
                >
                  View Details
                </Link>
                <OverlayTrigger overlay={gallerytip}>
                  <Link to="#" className="listing-gallery">
                    {" "}
                    <i className="fas fa-camera" />{" "}
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      );
    });
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPagination = pageNumbers.map((number) => {
      const activeCondition = this.state.currentPage === number ? "active" : "";
      return (
        <Fragment key={number}>
          {pageNumbers.length > 1 ? (
            <li
              className={classNames("page-item", { active: activeCondition })}
            >
              <Link
                className="page-link"
                to="#"
                data-page={number}
                onClick={this.handleClick}
              >
                {number}
              </Link>
            </li>
          ) : (
            ""
          )}
        </Fragment>
      );
    });

    return (
      <div className="section pagination-content">
        <div className="container">
          <div className="row">
            {/* Sidebar Start */}
            <div className="col-lg-3">
              <Sidebar />
            </div>
            {/* Sidebar End */}
            {/* Posts Start */}
            <div className="col-lg-9">
              {/* Controls Start */}
              <div className="acr-global-listing-controls"></div>
              {/* Controls End */}
              <div className="row">
                {/* Listing Start */}
                {this.state.loading === false ? renderitems : <Loader />}
                {/* Listing End */}
              </div>
              {/* Pagination Start */}
              {pageNumbers.length > 1 ? (
                <ul className="pagination">
                  {/* Prev */}
                  {/* to show previous, we need to be on the 2nd or more page */}
                  {pageNumbers.length > 1 && this.state.currentPage !== 1 ? (
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                        data-page={this.state.currentPage - 1}
                        onClick={this.handleClick}
                      >
                        <i className="fas fa-chevron-left" />
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Prev */}
                  {renderPagination}
                  {/* Next */}
                  {/* to show next, we should not be on the last page */}
                  {pageNumbers.length > 1 &&
                  this.state.currentPage !== pageNumbers.length ? (
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                        data-page={parseInt(this.state.currentPage + 1)}
                        onClick={this.handleClick}
                      >
                        <i className="fas fa-chevron-right" />
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Next */}
                </ul>
              ) : (
                ""
              )}
              {/* Pagination End */}
            </div>
            {/* Posts End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
