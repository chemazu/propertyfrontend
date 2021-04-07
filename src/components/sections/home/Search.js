import React, { Component } from 'react';
import { locationlist, statuslist, pricerangelist, bedslist, bathroomslist, typelist, diameterlist } from '../../../data/select.json';
import Select2 from 'react-select2-wrapper';
import classNames from 'classnames';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            advancesearch: false
        }
        this.advancetoggle = this.advancetoggle.bind(this);
    }
    advancetoggle() {
        this.setState({
            advancesearch: !this.state.advancesearch
        })
    }
    render() {
        const acrstyle={
            position: "relative",
        }
        return (
            <div className="banner  banner-3 "  style={{border:"none"}}>
        <div className="acr-filter-form " style={acrstyle}>
        <form method="post">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="form-group acr-custom-select">
                        <label>Location: </label>
                        <Select2 data={locationlist} options={{
                            placeholder: 'Any Location',
                        }} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="form-group acr-custom-select">
                        <label>Status: </label>
                        <Select2 data={statuslist} options={{
                            placeholder: 'Any Status',
                        }} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="form-group acr-custom-select">
                        <label>Price Range: </label>
                        <Select2 data={pricerangelist} options={{
                            placeholder: 'Any Range',
                        }} />
                    </div>
                </div>
                <div className="submit-btn col-lg-2 col-md-6">
                    <div className="form-group">
                        <button type="submit" className="btn-custom secondary btn-block" name="button">Search listings</button>
                    </div>
                </div>
            </div>
            <div className={classNames("advanced-search", { "d-block": this.state.advancesearch })}>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="acr-custom-select form-group">
                            <label>Beds: </label>
                            <Select2 data={bedslist} options={{
                                placeholder: 'Any amount',
                            }} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="acr-custom-select form-group">
                            <label>Bathrooms: </label>
                            <Select2 data={bathroomslist} options={{
                                placeholder: 'Any amount',
                            }} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="acr-custom-select form-group">
                            <label>Type: </label>
                            <Select2 data={typelist} options={{
                                placeholder: 'Any Type',
                            }} />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="acr-custom-select form-group">
                            <label>Diameter: </label>
                            <Select2 data={diameterlist} options={{
                                placeholder: 'Any Range',
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div className={classNames("advanced-search-trigger semi-circle", { "active": this.state.advancesearch })} onClick={this.advancetoggle}>
            <i className="fas fa-chevron-down" />
        </div>
    </div>
    </div>)
    }
}

export default Search;
