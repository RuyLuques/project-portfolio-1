import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Ecommerce from "./components/ecommerce/Ecommerce";
import Navbar from "./components/portfolio/navbar/Navbar";
import BarNavigation from "./components/portfolio/barNavigation/BarNavigation";
import Footer from "./components/portfolio/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <BarNavigation />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
