import React, { Component } from "react";
import './index.css';
import { Link } from 'react-router-dom'; 

class Buyer extends Component {
  state = {
    filter: {
      price: "",
      location: "",
      size: "",
      bedrooms: "",
      bathrooms: "",
      yearBuilt: ""
    },
    interestedProperty: null
  };

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        [name]: value
      }
    }));
  };

  applyFilters = (property) => {
    const { price, location, size, bedrooms, bathrooms, yearBuilt } = this.state.filter;
    return (
      (!price || property.price <= price) &&
      (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
      (!size || property.size.toLowerCase().includes(size.toLowerCase())) &&
      (!bedrooms || property.bedrooms >= bedrooms) &&
      (!bathrooms || property.bathrooms >= bathrooms) &&
      (!yearBuilt || property.yearBuilt >= yearBuilt)
    );
  };

  handleInterestClick = (property) => {
    this.setState({ interestedProperty: property });
  };

  render() {
    const { list } = this.props;
    const { filter, interestedProperty } = this.state;
    const filteredList = list.filter(this.applyFilters);

    return (
      <div className="hel">
         <h1>RENTIFY</h1>

      <div className="buyer-container">
        
        <div className ="header">
        <h2>Available Properties</h2>
        <div className="options">
        <Link to="/seller">
            <button>Sell Property
            </button></Link> {/* Link to the seller page */}

        </div>
        </div>
       

        <ul className="house-list">
          {filteredList.map(property => (
            <li key={property.segmentId} className="house-item">
              <h2>Price: ${property.price}</h2>
              <p>Location: {property.location}</p>
              <p>Size: {property.size}</p>
              <p>Description: {property.description}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Year Built: {property.yearBuilt}</p>
              <button onClick={() => this.handleInterestClick(property)} className="interest-button">I'm Interested</button>
            </li>
          ))}
        </ul>

        {interestedProperty && (
          <div className="seller-details">
            <h2>Seller Details</h2>
            <p>Email: {interestedProperty.sellerEmail}</p>
          </div>
        )}
      </div>
      </div>
    );
  }
}

export default Buyer;
