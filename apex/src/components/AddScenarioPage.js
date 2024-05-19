import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddScenarioPage.css';

const AddScenarioPage = () => {
  const [scenarioName, setScenarioName] = useState('');
  const [scenarioTime, setScenarioTime] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!scenarioName) {
      setError('Scenario Name is required');
      return;
    }
    console.log(`Scenario Name: ${scenarioName}, Scenario Time: ${scenarioTime}`);

    

    setScenarioName('');
    setScenarioTime('');
    setError('');
  };

  const handleReset = () => {
    setScenarioName('');
    setScenarioTime('');
    setError('');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="add-scenario-container">
      <h3>Scenario/add</h3>
      <h2>Add Scenario</h2>
      <div>
        <div className="form-group">
          <label htmlFor="scenarioName">Scenario Name</label>
          <input
            type="text"
            id="scenarioName"
            value={scenarioName}
            onChange={(e) => setScenarioName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="scenarioTime">Scenario Time (seconds)</label>
          <input
            type="number"
            id="scenarioTime"
            value={scenarioTime}
            onChange={(e) => setScenarioTime(e.target.value)}
          />
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="button-group">
        <button className="btn add" onClick={handleAdd}>Add</button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
        <button className="btn go-back" onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default AddScenarioPage;
