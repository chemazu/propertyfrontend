import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <Fragment>
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
            alt="logo"
          />{" "}
        </Link>
        {/* Menu */}
        <ul className="navbar-nav">
          <li className="menu-item menu-item-has-children">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link>Buy</Link>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link to="/listing-grid/buy">
                  find properties for sale
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link>Rent</Link>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link to="/listing-grid/rent">
                  find properties for rent{" "}
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link to="/submit-listing">Sell</Link>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link to="/submit-listing">sell with ease </Link>{" "}
              </li>
            </ul>
          </li>

          <li className="menu-item menu-item-has-children">
            <Link>Request</Link>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link to="/submit-request">Submit Request</Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link to="/listing-grid/rent">View Requests</Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link to="/agent-archive">Find Craftsmen</Link>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link to="/agent-archive">
                  Find craftsmen and other Pros
                </Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link to="/register">
                  Enlist your trade as a craftsman
                </Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link to="/agency-archive">Agents</Link>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <Link to="/agency-archive">Estate Agents</Link>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <Link to="/agency-details">Developers</Link>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Menu;
