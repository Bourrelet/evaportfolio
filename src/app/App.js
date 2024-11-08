import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import '../styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route parent avec Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
