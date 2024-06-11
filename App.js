import React, { Component } from "react";
import Seller from "./sellerpage";
import Buyer from './buyer';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login form'

class App extends Component {
    state = {
        properties: []
    };

    componentDidMount() {
        // Retrieve properties from local storage if they exist
        const storedProperties = JSON.parse(localStorage.getItem("properties"));
        if (storedProperties) {
            this.setState({ properties: storedProperties });
        }
    }

    addProperty = (newProperty) => {
        this.setState(prevState => ({
            properties: [...prevState.properties, newProperty]
        }), () => {
            // Update local storage after adding a new property
            localStorage.setItem("properties", JSON.stringify(this.state.properties));
        });
    };

    render() {
        return (
            <Router>
                <div className="app-container">
                    <Routes>
                        {/* Define routes using the Route component */}
                        <Route path="/" element={<Login />} /> {/* Set Login component as the default route */}
                        <Route path="/buyer" element={<Buyer list={this.state.properties} />} />
                        <Route path="/seller" element={<Seller addProperty={this.addProperty} />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
