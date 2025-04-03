import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/assets/css/style.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;