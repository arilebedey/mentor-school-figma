import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Additional styles specific to App if needed
import HeroSection from "./components/HeroSection";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
