import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Presentation from './pages/Presentation';
import Realisations from './pages/Realisations';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route parent avec Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Presentation />} />
          <Route path="realisations" element={<Realisations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
