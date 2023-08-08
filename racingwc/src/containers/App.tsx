import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Products from "../components/Products";
import About from "../components/About";
import "../assets/styles/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrap">
          <div className="main">
            <Routes>
              <Route exact={true} path="/" element={<Body />} />
              <Route path="/products/" element={<Products />} />
              <Route path="/about/" element={<About />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
