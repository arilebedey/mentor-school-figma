import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Additional styles specific to App if needed

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="main-content">{/* Main content here */}</div>
      </div>
    </div>
  );
};

export default App;
