import React from "react";
import Navbar from "@components/Navbar/Navbar";
import "./App.css"; // Additional styles specific to App if needed
import HeroSection from "@components/HeroSection/HeroSection";

const App: React.FC = () => {
  return (
    <div className="grid-container">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
