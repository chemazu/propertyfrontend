import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  OverlayTrigger,
  Tooltip,
  Dropdown,
  NavLink,
  // Accordion,
  // Card,
} from "react-bootstrap";
import listing from "../../../data/listings.json";
// import Calculator from "../../layouts/Calculator";
import $ from "jquery";
import "magnific-popup";
import classNames from "classnames";

// Gallery
const listinggallery = [
  { img: "assets/img/listing-single/2.jpg" },
  { img: "assets/img/listing-single/3.jpg" },
  { img: "assets/img/listing-single/4.jpg" },
  { img: "assets/img/listing-single/5.jpg" },
];

const gallerytip = <Tooltip>Gallery</Tooltip>;
const bedstip = <Tooltip>Beds</Tooltip>;
const bathstip = <Tooltip>Bathrooms</Tooltip>;
const areatip = <Tooltip>Square Feet</Tooltip>;

class Listingwrapper extends Component {
  constructor(props) {
    console.log("mounted", 1);
    super(props);
    this.state = {
      showmore: false,
      listing: { title: "Property Name" },
      user: "",
    };
    this.showmoretoggle = this.showmoretoggle.bind(this);
    const getListing = async () => {
      const token = JSON.parse(localStorage.getItem("authtoken")) || null;
      let res = await axios.get(`/listing/listing/${this.props.id}`, {
        headers: { Authorization: `Bearer ${token.token}` },
      });
      let data = await res.data;
      console.log(data);
      this.setState({ listing: data.data });
    };
    getListing();
  }
  showmoretoggle() {
    this.setState({
      showmore: !this.state.showmore,
    });
  }
  componentDidMount() {
    function popup() {
      $(".gallery-thumb").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }
    popup();
  }
  render() {
    const {
      title,
      description,
      images,
      price,
      type,
      bathrooms,
      bedrooms,
      area,
      location,
    } = this.state.listing;
    console.log(images);
    let gallery = images || ["assets/img/listing-single/2.jpg"];

    return (
      <div className="section listing-wrapper" style={{ paddingTop: "40vh" }}>
        <div className="container">
          <div className="row">
            {/* Listings Start */}
            <div className="col-lg-8">
              {/* Content Start */}
              <div className="listing-content">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="row">
                  {gallery.map((item, i) => (
                    <div key={i} className="col-md-6 mb-3">
                      <Link to={`/uploads/${item}`} className="gallery-thumb">
                        <img src={`/uploads/${item}`} alt="post" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* Content End */}
              {/* Price Range In the area Start */}
              <div className="section">
                <div className="acr-area-price">
                  <span style={{ left: "30%" }}>{price}</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="acr-area-price-wrapper">
                    <div className="acr-area-price-min">
                      <h5>{parseInt(price) / 2}</h5>
                      <span>Lowest</span>
                    </div>
                    <h5>Price range in the area</h5>
                    <div className="acr-area-price-max">
                      <h5>{parseInt(price) * 5}</h5>
                      <span>Highest</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Price Range In the area End */}
              <div className="section section-padding pt-0 acr-listing-features">
                <h4>Features</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="listing-feature-wrapper">
                      <div className="listing-feature">
                        <i className="flaticon-picture" />
                        <h6 className="listing-feature-label">Propery Type</h6>
                        <span className="listing-feature-value">{type}</span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-mailbox" />
                        <h6 className="listing-feature-label">Location</h6>
                        <span className="listing-feature-value">
                          {location}
                        </span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-chair" />
                        <h6 className="listing-feature-label">Furnished</h6>
                        <span className="listing-feature-value">Yes</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="listing-feature-wrapper">
                      <div className="listing-feature">
                        <i className="flaticon-bathroom" />
                        <h6 className="listing-feature-label">Bathrooms</h6>
                        <span className="listing-feature-value">
                          {bathrooms}
                        </span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-pillow" />
                        <h6 className="listing-feature-label">Bed Rooms</h6>
                        <span className="listing-feature-value">
                          {bedrooms}
                        </span>
                      </div>

                      <div className="listing-feature">
                        <i className="flaticon-ruler" />
                        <h6 className="listing-feature-label">Property Size</h6>
                        <span className="listing-feature-value">
                          {area} Sqft
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className={classNames(
                    "load-more-features btn-custom-2 light-grey btn-block",
                    { "d-none": this.state.showmore }
                  )}
                  onClick={this.showmoretoggle}
                >
                  Show More
                </button>
                <div
                  className={classNames("hidden-listing-features", {
                    "d-block": this.state.showmore,
                  })}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="listing-feature">
                        <i className="flaticon-key" />
                        <h6 className="listing-feature-label">Property Id</h6>
                        <span className="listing-feature-value">BPFXQEI</span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-garage" />
                        <h6 className="listing-feature-label">Parking</h6>
                        <span className="listing-feature-value">Yes</span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-history" />
                        <h6 className="listing-feature-label">Year Built</h6>
                        <span className="listing-feature-value">1979</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="listing-feature">
                        <i className="flaticon-new" />
                        <h6 className="listing-feature-label">Condition</h6>
                        <span className="listing-feature-value">New</span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-ruler" />
                        <h6 className="listing-feature-label">Lot Size</h6>
                        <span className="listing-feature-value">89 Acres</span>
                      </div>
                      <div className="listing-feature">
                        <i className="flaticon-eye" />
                        <h6 className="listing-feature-label">View</h6>
                        <span className="listing-feature-value">City View</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section pt-0 acr-listing-nearby">
                <h4>What's Nearby</h4>
                <div className="listing-nearby-item">
                  <h6 className="custom-success">
                    <i className="fas fa-utensils" />
                    Restaurants
                  </h6>
                  <ul>
                    <li>
                      <span>
                        <b>The One</b> <span>(1.3 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <b>Elephant</b> <span>(0.2 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <b>Jorgie and Clyne</b> <span>(3.2 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="listing-nearby-item">
                  <h6 className="custom-danger">
                    <i className="fas fa-graduation-cap" />
                    Education
                  </h6>
                  <ul>
                    <li>
                      <span>
                        <b>Greater Moscow Liberty School</b>{" "}
                        <span>(1.3 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <b>Chandler Highschool</b> <span>(0.2 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <b>Insitution of Science and Technology</b>{" "}
                        <span>(3.2 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="listing-nearby-item">
                  <h6 className="custom-warning">
                    <i className="fas fa-shopping-basket" />
                    Essentials
                  </h6>
                  <ul>
                    <li>
                      <span>
                        <b>Joe's 24/7 Groceries</b> <span>(0.6 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li>
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <b>Frank and Joe</b> <span>(0.9 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <b>All United Store</b> <span>(1.2 km)</span>{" "}
                      </span>
                      <ul>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                        <li className="custom-warning">
                          <i className="fas fa-star fa-xs" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section pt-0">
                <h4>Property Video</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe
                    title="video"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/Sz_1tkcU0Co"
                  />
                </div>
              </div>

              <div className="section section-padding">
                <h4>Similar Listings</h4>
                <div className="row">
                  {/* Listing Start */}
                  {listing.slice(0, 2).map((item, i) => (
                    <div key={i} className="col-md-6">
                      <div className="listing">
                        <div className="listing-thumbnail">
                          <Link to="/listing-details-v1">
                            <img
                              src={process.env.PUBLIC_URL + "/" + item.gridimg}
                              alt="listing"
                            />
                          </Link>
                          <div className="listing-badges">
                            {item.star === true ? (
                              <span className="listing-badge featured">
                                {" "}
                                <i className="fas fa-star" />{" "}
                              </span>
                            ) : (
                              ""
                            )}
                            {item.sale === true ? (
                              <span className="listing-badge sale">
                                On Sale
                              </span>
                            ) : (
                              ""
                            )}
                            {item.pending === true ? (
                              <span className="listing-badge pending">
                                {" "}
                                Pending
                              </span>
                            ) : (
                              ""
                            )}
                            {item.rental === true ? (
                              <span className="listing-badge rent">
                                {" "}
                                Rental
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
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
                          <div className="listing-author">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/" + item.authorimg
                              }
                              alt="author"
                            />
                            <div className="listing-author-body">
                              <p>
                                {" "}
                                <Link to="#">{item.authorname}</Link>{" "}
                              </p>
                              <span className="listing-date">
                                {item.postdate}
                              </span>
                            </div>
                            <Dropdown className="options-dropdown">
                              <Dropdown.Toggle as={NavLink}>
                                <i className="fas fa-ellipsis-v" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-right">
                                <ul>
                                  <li>
                                    {" "}
                                    <Link to="tel:+123456789">
                                      {" "}
                                      <i className="fas fa-phone" /> Call Agent
                                    </Link>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <Link to="mailto:+123456789">
                                      {" "}
                                      <i className="fas fa-envelope" /> Send
                                      Message
                                    </Link>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <Link to="/listing-details-v1">
                                      {" "}
                                      <i className="fas fa-bookmark" /> Book
                                      Tour
                                    </Link>{" "}
                                  </li>
                                </ul>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <h5 className="listing-title">
                            {" "}
                            <Link to="/listing-details-v1" title={item.title}>
                              {item.title}
                            </Link>{" "}
                          </h5>
                          <span className="listing-price">
                            {new Intl.NumberFormat().format(
                              item.monthlyprice.toFixed(2)
                            )}
                            $ <span>/month</span>{" "}
                          </span>
                          <p className="listing-text">{item.text}</p>
                          <div className="acr-listing-icons">
                            <OverlayTrigger overlay={bedstip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-bedroom" />
                                <span className="acr-listing-icon-value">
                                  {item.beds}
                                </span>
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={bathstip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-bathroom" />
                                <span className="acr-listing-icon-value">
                                  {item.bathrooms}
                                </span>
                              </div>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={areatip}>
                              <div className="acr-listing-icon">
                                <i className="flaticon-ruler" />
                                <span className="acr-listing-icon-value">
                                  {new Intl.NumberFormat().format(item.area)}
                                </span>
                              </div>
                            </OverlayTrigger>
                          </div>
                          <div className="listing-gallery-wrapper">
                            <Link
                              to="/listing-details-v1"
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
                  ))}
                  {/* Listing End */}
                </div>
              </div>
              {/* Similar End */}
            </div>
            {/* Listings End */}
            {/* Sidebar Start */}
            <div className="col-lg-4">
              <div className="sidebar sticky-sidebar">
                <div className="sidebar-widget">
                  <h5>Meet The Agent</h5>
                  {/* Author Start */}
                  <div className="media sidebar-author listing-agent">
                    <Link to="#">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/img/people/1.jpg"
                        }
                        alt="agent"
                      />
                    </Link>
                    <div className="media-body">
                      <h6>
                        {" "}
                        <Link to="#">Freddy Burben</Link>{" "}
                      </h6>
                      <span>Company Agent</span>
                    </div>
                    <Dropdown className="options-dropdown">
                      <Dropdown.Toggle as={NavLink}>
                        <i className="fas fa-ellipsis-v" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-right">
                        <ul>
                          <li>
                            {" "}
                            <Link to="tel:+123456789">
                              {" "}
                              <i className="fas fa-phone" /> Call Agent
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="/listing-grid">
                              {" "}
                              <i className="fas fa-th-list" /> View Listings
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="#">
                              {" "}
                              <i className="fas fa-star" /> Save Agent
                            </Link>{" "}
                          </li>
                        </ul>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* Author End */}
                  {/* Contact Start */}
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Enter your message"
                        className="form-control"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-custom primary light btn-block"
                    >
                      Send Message
                    </button>
                  </form>
                  {/* Contact End */}
                </div>
                <div className="sidebar-widget">
                  <h5>Recent Listings</h5>
                  {/* Listing Start */}
                  {listing
                    .filter(function (item) {
                      return item.recent === true;
                    })
                    .slice(0, 4)
                    .map((item, i) => (
                      <div key={i} className="listing listing-list">
                        <div className="listing-thumbnail">
                          <Link to="/listing-details-v1">
                            <img
                              src={process.env.PUBLIC_URL + "/" + item.gridimg}
                              alt="listing"
                            />
                          </Link>
                        </div>
                        <div className="listing-body">
                          <h6 className="listing-title">
                            {" "}
                            <Link to="/listing-details-v1" title={item.title}>
                              {item.title}
                            </Link>{" "}
                          </h6>
                          <span className="listing-price">
                            {new Intl.NumberFormat().format(
                              item.monthlyprice.toFixed(2)
                            )}
                            $ <span>/month</span>{" "}
                          </span>
                        </div>
                      </div>
                    ))}
                  {/* Listing End */}
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Listingwrapper;
