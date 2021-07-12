import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
function Content(props) {
  const history = useHistory();
  const [request, setRequest] = useState({
    userId: userInfo._id,
    title: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
    status: "",
    category: "",
    type: "",
    area: "",
    address: "",
    price: "",
    bedrooms: "",
    toilets: "",
    bathrooms: "",
    parking: "",
    furnished: "",
    serviced: "",
    images: [],
    more: "",
  });

  //MY CODE

  function handleChange(e) {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await axios.post("/request/add", request);
    let data = await res.data;
    if (data.success) {
      history.push("/profile");
    } else {
      console.log("error");
    }
  }
  const {
    location,
    name,
    email,
    phone,
    description,
    status,
    category,
    area,
    type,
    address,
    price,
    bedrooms,
  } = request;
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <Tab.Container defaultActiveKey="tab1">
            <div className="col-md-12">
              <h4>Request Details</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-3 form-group">
                    <label>Property Status</label>
                    <select
                      className="form-control"
                      name="status"
                      value={status}
                      onChange={handleChange}
                    >
                      <option value="For Rent">Select Property Status</option>

                      <option value="For Rent">For Rent</option>
                      <option value="Featured">Featured</option>
                      <option value="For Sale">For Sale</option>
                    </select>
                  </div>
                  <div className="col-md-3 form-group">
                    <label>Property Category</label>
                    <select
                      className="form-control"
                      name="category"
                      value={category}
                      onChange={handleChange}
                    >
                      <option>Select Category</option>
                      <option value="Residential">Residential</option>

                      <option value="Commercial">Commercial</option>
                      <option value="Villas">Villas</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Beach House">Beach House</option>
                      <option value="Duplex">Duplex</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label>Property Type</label>
                    <select
                      className="form-control"
                      name="type"
                      value={type}
                      onChange={handleChange}
                    >
                      <option>Select property type</option>

                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Condo">Condo</option>
                      <option value="Townhome">Townhome</option>
                      <option value="Villa">Villa</option>
                      <option value="Duplex">Duplex</option>
                    </select>
                  </div>

                  <div className="col-md-3 form-group">
                    <label>Property Space (Sqft)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Space (Sqft)"
                      name="area"
                      value={area}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      name="location"
                      value={location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-3 form-group">
                    <label>Property Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Address"
                      name="address"
                      value={address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label>Beds</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Number of Bathrooms"
                      name="bedrooms"
                      value={bedrooms}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3 form-group">
                    <label>Property Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">₦</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        placeholder="Property Price"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <label>Property Description</label>
                    <textarea
                      rows={4}
                      className="form-control"
                      placeholder="Property Description"
                      name="description"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Address"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Address"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-8 form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Property Address"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-custom" name="submit">
                  Submit Request
                </button>
              </form>
            </div>
          </Tab.Container>
          {/* Tab Content End */}
        </div>
      </div>
    </div>
  );
}

export default Content;
