import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";
import Foter from "./components/Foter";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/id" element={<ProductsDetails />} />
        </Routes>
        <Sidebar />
        <Foter />
      </Router>
    </div>
  );
};

export default App;
