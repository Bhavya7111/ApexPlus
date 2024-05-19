import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllScenariosPage.css'; 
import scenariosData from './Data/Scenarios.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function ScenariosPage() {
  const [scenarios, setScenarios] = useState(scenariosData);
  const navigate = useNavigate();

  const handleAddScenario = () => {
    navigate('/add-scenario'); 
  };

  const handleAddVehicle = (id) => {
    navigate(`/add-vehicle/${id}`); 
  };

  const handleDeleteAll = () => {
    setScenarios([]);
    console.log('All scenarios deleted');
  };

  const handleEditScenario = (id) => {
    navigate(`/edit-scenario/${id}`); 
  };

  const handleDeleteScenario = (id) => {
    setScenarios(scenarios.filter(scenario => scenario.id !== id));
    console.log(`Scenario with id: ${id} deleted`);
  };

  return (
    <div className="scenarios-page">
      <div className="top-buttons">
        <button className="btn new-scenario" onClick={handleAddScenario}>New Scenario</button>
        <button className="btn add-vehicle" onClick={() => navigate('/add-vehicle')}>Add Vehicle</button>
        <button className="btn delete-all" onClick={handleDeleteAll}>Delete All</button>
      </div>
      <table className="scenarios-table">
        <thead>
          <tr>
            <th>Scenario ID</th>
            <th>Scenario Name</th>
            <th>Scenario Time</th>
            <th>Number of Vehicles</th>
            <th>Add Vehicle</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map(scenario => (
            <tr key={scenario.id}>
              <td>{scenario.id}</td>
              <td>{scenario.name}</td>
              <td>{scenario.time}s</td>
              <td>{scenario.vehicles}</td>
              <td>
                <button className="btn icon-btn" onClick={() => handleAddVehicle(scenario.id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </td>
              <td>
                <button className="btn icon-btn" onClick={() => handleEditScenario(scenario.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
              <td>
                <button className="btn icon-btn" onClick={() => handleDeleteScenario(scenario.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScenariosPage;
