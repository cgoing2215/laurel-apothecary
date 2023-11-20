import React from "react"
import Layout from "./components/Layout";
import Homepage from "./pages/home/Homepage";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Recommendations from "./pages/recommendations/Recommendations";
import Contact from "./pages/contact/Contact";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Homepage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/recommendations" element={<Recommendations />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
