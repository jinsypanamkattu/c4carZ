// App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarListing from "./components/CarListing";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      
      <CarListing />
      <Footer />
    </div>
  );
}

export default App;

