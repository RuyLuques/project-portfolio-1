import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Technology from "./pages/technology/Technology";
import Contact from "./pages/contact/Contact";
import Ecommerce from "./components/ecommerce/Ecommerce";
import Navbar from "./components/portfolio/navbar/Navbar";
import BarNavigation from "./components/portfolio/bar-navigation/BarNavigation";
import Footer from "./components/portfolio/footer/Footer";
import CartAdd from "./components/ecommerce/cart/CartAdd";

function App() {
  return (
    <Router>
      <Navbar />
      <BarNavigation />
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/cartAdd" element={<CartAdd />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
