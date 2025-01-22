import { useState } from "react";
import "./CarCard.css";

const CarCard = ({ car, onCompare }) => {
  const [isHovered, setIsHovered] = useState(false);

  // External GIF URL for the hover effect
  const externalGifUrl = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmNjdjFmZWM4c2o1M2c4MjV3cnUxYTN2ajE4MXY5Y243ZzAyYm10biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qj6wxBCrfHmJR2peq3/giphy.gif";

 

  return (
    <div
      className="car-card"
      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      {/* Static car image */}
      <img
        src={car.image}
        alt={car.name}
        className={`car-image ${isHovered ? 'hidden' : ''}`} // Hide static image on hover
      />
      
      {/* Show GIF from external URL on hover */}
      {isHovered && (
        <img
          src={externalGifUrl}
          alt={`${car.name} GIF`}
          className="car-image-hover"
        />
      )}
      
      <h3 className="car-name">{car.name}</h3>
      <p className="car-price">Price: ${car.price}</p>
      <p className="fuel-type">Fuel Type: {car.fuelType}</p>
      <button className="compare-btn" onClick={() => onCompare(car)}>
        Add to Compare
      </button>
    </div>
  );
};

export default CarCard;
