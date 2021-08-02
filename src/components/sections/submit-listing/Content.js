import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Features
// const features = [
//   { id: 1, icon: "mailbox", title: "serviced" },
//   { id: 2, icon: "chair", title: "furnished" },
//   { id: 3, icon: "garage", title: "parking" },
// ];

const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
function Content(props) {
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [thumbImage, setThumbImage] = useState([]);

  const [listing, setListing] = useState({
    userId: userInfo._id,
    title: "",
    location: "",
    description: "",
    status: "",
    type: "",
    area: "",
    address: "",
    price: "",
    beds: "",
    toilets: "",
    baths: "",
    parking: false,
    furnished: false,
    serviced: false,
    rooms: "",
    images: [],
    thumbnail: "",
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setPhotos(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img src={file.preview} alt="img" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  //MY CODE

  function handleChange(e) {
    const { name, value } = e.target;
    setListing({ ...listing, [name]: value });
  }
  function handleThumbnail(e) {
    console.log(e.target.files);
    const file = e.target.files[0];
    setThumbImage(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(listing);
    const formData = new FormData();
    for (let i = 0; i < photos.length; i++) {
      formData.append(`file`, photos[i]);
    }
    formData.append("listing", JSON.stringify(listing));
    formData.append("thumbnail", thumbImage);
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}/listing/add`,
        formData
      );
      let data = await res.data;
      if (data.success) {
        history.push("/profile");
      }
      if (!data.success) {
        console.log();
      }
    } catch (error) {
      console.log(error);
    }
  }
  const {
    title,
    location,
    description,
    status,
    type,
    area,
    address,
    price,
    beds,
    toilets,
    baths,
    parking,
    furnished,
    serviced,
    rooms,
  } = listing;
  const features = [
    { id: serviced, icon: "mailbox", title: "serviced" },
    { id: furnished, icon: "chair", title: "furnished" },
    { id: parking, icon: "garage", title: "parking" },
  ];
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <Tab.Container defaultActiveKey="tab1">
            {/* Tabs Start */}
            <div className="col-md-4">
              <Nav variant="tabs" className="nav nav-tabs tab-cards">
                <Nav.Item>
                  <Nav.Link eventKey="tab1">
                    <span>01</span> Basic Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2">
                    <span>02</span> Gallery
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="tab4">
                    <span>03</span> Features
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* Tabs End */}
            {/* Tab Content Start */}
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <Tab.Content className="m-0">
                  <Tab.Pane eventKey="tab1">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label>Property Name</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Property Name"
                          name="title"
                          value={title}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Status</label>
                        <select
                          required
                          className="form-control"
                          name="status"
                          value={status}
                          onChange={handleChange}
                        >
                          <option value="For Rent">
                            Select Property Status
                          </option>

                          <option value="rent">For Rent</option>
                          <option value="featured">Featured</option>
                          <option value="sale">For Sale</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label>Property Type</label>
                        <select
                          required
                          className="form-control"
                          name="type"
                          value={type}
                          onChange={handleChange}
                        >
                          <option>Select property type</option>

                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="villas">Villas</option>
                          <option value="apartments">Apartments</option>
                          <option value="beach">Beach House</option>
                          <option value="duplex">Duplex</option>
                        </select>
                      </div>

                      <div className="col-md-6 form-group">
                        <label>Property Space (Sqft)</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Property Space (Sqft)"
                          name="area"
                          value={area}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Location</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          name="location"
                          value={location}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 form-group">
                        <label>Property Address</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Property Address"
                          name="address"
                          value={address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Property Price</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">₦</span>
                          </div>
                          <input
                            required
                            type="text"
                            className="form-control"
                            name="price"
                            value={price}
                            onChange={handleChange}
                            placeholder="Property Price"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label>Rooms</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Number of Bathrooms"
                          name="rooms"
                          value={rooms}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4 form-group">
                        <label>Bathrooms</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Number of bathrooms"
                          name="baths"
                          value={baths}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4 form-group">
                        <label>Beds</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Number of bedrooms"
                          name="beds"
                          value={beds}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-4 form-group">
                        <label>Toilets</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          placeholder="Number of toilets"
                          name="toilets"
                          value={toilets}
                          onChange={handleChange}
                        />
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
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="form-group">
                      <label>Property Thumbnail</label>
                      <div className="custom-file">
                        <input
                          required
                          type="file"
                          className="custom-file-input"
                          id="propertyThumbnail"
                          onChange={handleThumbnail}
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="propertyThumbnail"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Property Gallery</label>
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input required {...getInputProps()} />
                        <div className="dropzone-msg dz-message needsclick">
                          <i className="fas fa-cloud-upload-alt" />
                          <h5 className="dropzone-msg-title">
                            Drop files here or click to upload.
                          </h5>
                        </div>
                      </div>
                      <aside className="thumbsContainer">{thumbs}</aside>
                      <span className="acr-form-notice">
                        *You can upload up to 5 images for your listing
                      </span>
                      <span className="acr-form-notice">
                        *Listing images should be atleast 620x480 in dimensions
                      </span>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3"></Tab.Pane>
                  <Tab.Pane eventKey="tab4">
                    <div className="row">
                      {features.map((item, i) => {
                        return (
                          <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <label className="acr-listing-feature">
                              <input
                                required
                                type="checkbox"
                                name={item.title}
                                value={item.id}
                                onChange={handleChange}
                              />
                              <i className="acr-feature-check fas fa-check" />
                              <i
                                className={
                                  "acr-listing-feature-icon flaticon-" +
                                  item.icon +
                                  ""
                                }
                              />
                              {item.title}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    <Tab.Pane eventKey="tab5">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            required
                            type="checkbox"
                            className="custom-control-input"
                            id="termsAndConditions"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="termsAndConditions"
                          >
                            I Agree to the terms &amp; Conditions of Property
                            Submission
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn-custom"
                        name="submit"
                      >
                        Submit Listing
                      </button>
                    </Tab.Pane>
                  </Tab.Pane>
                </Tab.Content>
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
