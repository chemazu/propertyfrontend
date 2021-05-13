import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const images = [
    { img: 'assets/img/coming-soon/1.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: 'assets/img/coming-soon/2.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { img: 'assets/img/coming-soon/3.jpg', title: "Quote of the day", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
];

class Content extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "d-flex slick-dots",
        }
        return (
            <div className="acr-auth-container">
                <div className="acr-auth-content">
                    <form>
                        <div className="auth-text">
                            <h3>Create A PropertyLens Account</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control form-control-light" placeholder="Username" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control form-control-light" placeholder="Password" name="password" />
                        </div>
                        <div className="form-group">
                            <label>Register as Craftsman</label>
                            {/* <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" /> */}
                            <select name="cars" id="cars" className="form-control form-control-light">
                            <option value="0">Choose your Trade :</option>
                                <option value="1"> Architects</option>
                                <option value="2">Building Engineers and Contractors</option>
                                <option value="3">Carpentry, Furniture and Wood works</option>
                                <option value="4">Electrical Engineers and Technicians </option>
                                <option value="5">Estate Surveyors and Valuers</option>
                                <option value="6">Roofing Experts.</option>
                                <option value="7">Information Technology Consultants</option>
                                <option value="8">Interior Decoration Experts </option>
                                <option value="9">Landscape Artists</option>
                                <option value="10">Legal Experts</option>
                                <option value="11">Logistics and Relocation Experts.</option>
                                <option value="12">Masonry</option>
                                <option value="13"> Materials MerchantsO. Painters</option>
                                <option value="14"> Plaster of Paris and Ceiling finishing</option>
                                <option value="15"> Plumbers</option>
                                <option value="16"> Quantity Surveyors</option>
                                <option value="17">Security Systems Consultants</option>
                                <option value="18"> Tiles and Floor Experts</option>
                                <option value="19">Windows and wall Partition Experts</option>
</select>
                        </div>
                        <button type="submit" className="btn-custom secondary btn-block">Register</button>
                        <div className="auth-seperator">
                            <span>OR</span>
                        </div>
                        <div className="social-login">
                            <button type="button" className="acr-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                            <button type="button" className="acr-social-login google"><i className="fab fa-google" /> Continue with Google</button>
                        </div>
                        <p className="text-center mb-0">Already have an account? <Link to="/login">Login</Link> </p>
                    </form>
                </div>
                <div className="acr-auth-bg">
                    <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
                        {images.map((item, i) => (
                            <div key={i}>
                                <div className="acr-cs-bg-item bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} >
                                    <div className="acr-auth-quote">
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Content;