import React, { useState } from "react";
import CarCard from "./CarCard";
import "../css/CarListing.css";
import carsData from "../data/cars.json";
import { Form } from 'react-bootstrap';

function CarListing() {
  const [filters, setFilters] = useState({
    make: "",
    searchQuery: ""
  });

  const filteredCars = carsData.filter((car) => {
    return (
      (filters.make === "" || car.make.includes(filters.make)) &&
      (filters.searchQuery === "" ||
        car.model.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        car.year.toString().includes(filters.searchQuery))
    );
  });
  

  return (
    <div className="car-listing">
      <div className="filters">
      <Form.Group controlId="exampleSelect">
      
      <Form.Select className="custom-select"  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
          value={filters.make}
        >
          <option value="">All Makes</option>
          {Array.from(new Set(carsData.map((car) => car.make))).map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        
        </Form.Select>
    </Form.Group>
        <input
          type="text"
          placeholder="Search by model or year"
          className="custom-text-box" 
          value={filters.searchQuery}
          onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
        />
      </div>
      <div className="car-grid">
        
      {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <p className="no-cars">No cars found. Please adjust your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default CarListing;