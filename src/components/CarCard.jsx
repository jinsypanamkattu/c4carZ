// components/CarCard.js
import React, { useState } from "react";
import "../css/CarCard.css";

function CarCard({ car }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} className="car-image" />
      <h3>{car.make} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <button className="view-car" onClick={() => setShowPopup(true)}>View Car</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <iframe
              src={car.video}
              title="Car Video"
              className="popup-iframe"
              allowFullScreen
            ></iframe>
            <button className="close-popup" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarCard;
