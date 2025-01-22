import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import "./index.css";
//import './App.css';  // Adjust the path if needed

const App = () => {
  const [selectedCars, setSelectedCars] = useState([]);

  const cars = [
    {
      id: 1,
      name: "Car A",
      price: 20000,
      fuelType: "Petrol",
      image: "https://static.pexels.com/photos/63764/pexels-photo-63764.jpeg",
      gif: "https://media.giphy.com/media/3ohzdIuqJoo8bP4g9S/giphy.gif"
    },
    {
      id: 2,
      name: "Car B",
      price: 25000,
      fuelType: "Diesel",
      image: "https://img.freepik.com/premium-photo/shiny-black-car-polished-with-dark-isolated-background-website-print-design_800563-1793.jpg?w=2000",
      gif: "https://media.giphy.com/media/xT9IgpvWQPYtIuP2tw/giphy.gif"
    },
    {
      id: 3,
      name: "Car C",
      price: 30000,
      fuelType: "Electric",
      image: "https://cdn.shopify.com/s/files/1/1368/8659/products/s-l1600_2_a35c1481-ca86-4266-98c6-3565e38c7a26_1024x.jpg?v=1531930217",
      gif: "https://media.giphy.com/media/xT9DPLfm4hOd47y5Be/giphy.gif"
    },
    {
      id: 4,
      name: "Car D",
      price: 35000,
      fuelType: "Hybrid",
      image: "https://wallup.net/wp-content/uploads/2019/09/841798-lamborghini-aventador-super-veloce-cars-supercars-red.jpg",
      gif: "https://media.giphy.com/media/xT1R9P7DgIcWUBG1pG/giphy.gif"
    },
    {
      id: 5,
      name: "Car E",
      price: 40000,
      fuelType: "Electric",
      image: "https://th.bing.com/th/id/OIP.zu6MzwXB5Fjaxf3Z3Q1x5wHaD1?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      gif: "https://media.giphy.com/media/3ohzdIuqJoo8bP4g9S/giphy.gif"
    },
    {
      id: 6,
      name: "Car F",
      price: 45000,
      fuelType: "Diesel",
      image: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Hd-Car-wallpapers-Download.jpg",
      gif: "https://media.giphy.com/media/xT9IgpvWQPYtIuP2tw/giphy.gif"
    },
    {
      id: 7,
      name: "Car G",
      price: 50000,
      fuelType: "Petrol",
      image: "https://th.bing.com/th/id/OIP.2bhmaS3zknOuIATm5ljRvgHaE8?rs=1&pid=ImgDetMain",
      gif: "https://media.giphy.com/media/xT9DPLfm4hOd47y5Be/giphy.gif"
    },
    {
      id: 8,
      name: "Car H",
      price: 55000,
      fuelType: "Hybrid",
      image: "https://starrluxurycars.com/wp-content/uploads/2019/01/TESBG.jpg",
      gif: "https://media.giphy.com/media/xT1R9P7DgIcWUBG1pG/giphy.gif"
    },
  ];
  
  

  const handleCompare = (car) => {
    if (!selectedCars.some((selected) => selected.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  return (
    <Router>
      <Navbar />
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Routes>
        <Route path="/" element={<Home cars={cars} onCompare={handleCompare} />} />
        <Route path="/compare" element={<Compare selectedCars={selectedCars} />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
