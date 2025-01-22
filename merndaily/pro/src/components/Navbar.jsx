import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#333", padding: "10px" }}>
      {/* Left Side: Comparator Tool heading */}
      <h1 style={{ color: "#fff", marginRight: "auto" }}>Comparator Tool</h1>
      
      {/* Right Side: Home and Compare links */}
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "20px", textDecoration: "none" }}>Home</Link>
        <Link to="/compare" style={{ color: "#fff", textDecoration: "none" }}>Compare</Link>
      </div>
    </nav>
  );
};

export default Navbar;
