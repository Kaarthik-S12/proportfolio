import React from "react";
import CarCard from "../components/CarCard";
import './Home.css'; // Import the CSS file

const Home = ({ cars, onCompare }) => {
  return (
    <div className="home-page">
      <h2 className="page-title">Available Cars</h2>
      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onCompare={onCompare} />
        ))}
      </div>
    </div>
  );
};

export default Home;
