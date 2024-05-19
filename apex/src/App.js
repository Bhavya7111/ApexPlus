import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddScenarioPage from './components/AddScenarioPage';
import AllScenariosPage from './components/AllScenariosPage';
import AddVehiclePage from './components/AddVehiclePage';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/add-scenario" element={<AddScenarioPage />} />
            <Route path="/all-scenarios" element={<AllScenariosPage />} />
            <Route path="/add-vehicle" element={<AddVehiclePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
