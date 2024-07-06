import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import './index.css';
import { Link } from 'react-router-dom'; 


class Seller extends Component {
  state = {
    newHouse: {
      price: "",
      location: "",
      size: "",
      description: "",
      bedrooms: "",
      bathrooms: "",
      yearBuilt: "",
      sellerEmail: ""
    },
    houses: [],
    formVisible: true,
    notificationVisible: false
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newHouse: {
        ...prevState.newHouse,
        [name]: value
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newHouseWithId = {
      ...this.state.newHouse,
      segmentId: uuidv4()
    };
    this.setState(prevState => ({
      houses: [...prevState.houses, newHouseWithId],
      newHouse: {
        price: "",
        location: "",
        size: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
        yearBuilt: "",
        sellerEmail: ""
      },
      formVisible: false,
      notificationVisible: true
    }));
  };

  handleDelete = (segmentId) => {
    this.setState(prevState => ({
      houses: prevState.houses.filter(house => house.segmentId !== segmentId)
    }));
  };

  isFormValid = () => {
    const { price, location, size, description, bedrooms, bathrooms, yearBuilt, sellerEmail } = this.state.newHouse;
    return price && location && size && description && bedrooms && bathrooms && yearBuilt && sellerEmail;
  };

  showForm = () => {
    this.setState({ formVisible: true, notificationVisible: false });
  };

  render() {
    return (
      <div className="show">
         <h1>RENTIFY</h1>

      <div className="seller-container">
        <h2>Post a New House</h2>
        {this.state.notificationVisible && (
          <div className="notification">
            <p>Posting successful!</p>
            <button onClick={this.showForm} className="new-post-button">Post another house</button>
            <Link to="/buyer">
            <button className="naviagte_button"> Buy House
            </button></Link> 

          </div>
        )}
        {this.state.formVisible && (
          <form onSubmit={this.handleSubmit} className="house-form">
            <h2>Add a New House</h2>
            <div className="form-group">
              <label>Price: </label>
              <input type="number" name="price" value={this.state.newHouse.price} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Location: </label>
              <input type="text" name="location" value={this.state.newHouse.location} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Size: </label>
              <input type="text" name="size" value={this.state.newHouse.size} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input type="text" name="description" value={this.state.newHouse.description} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Bedrooms: </label>
              <input type="number" name="bedrooms" value={this.state.newHouse.bedrooms} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Bathrooms: </label>
              <input type="number" name="bathrooms" value={this.state.newHouse.bathrooms} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Year Built: </label>
              <input type="number" name="yearBuilt" value={this.state.newHouse.yearBuilt} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>Seller Email: </label>
              <input type="email" name="sellerEmail" value={this.state.newHouse.sellerEmail} onChange={this.handleChange} />
            </div>
            <button type="submit" className="submit-button" disabled={!this.isFormValid()}>Submit</button>
          </form>
        )}
        <ul>
          {this.state.houses.map(house => (
            <li key={house.segmentId}>
              <h3>Price: ${house.price}</h3>
              <p>Location: {house.location}</p>
              <p>Size: {house.size}</p>
              <p>Description: {house.description}</p>
              <p>Bedrooms: {house.bedrooms}</p>
              <p>Bathrooms: {house.bathrooms}</p>
              <p>Year Built: {house.yearBuilt}</p>
              <p>Seller Email: {house.sellerEmail}</p>
              <button onClick={() => this.handleDelete(house.segmentId)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
  }
}

export default Seller;
