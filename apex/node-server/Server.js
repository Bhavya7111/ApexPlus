// server.js

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let vehiclePositions = [
  { id: 1, x: 30, y: 215 },
  { id: 2, x: 500, y: 500 },
];

// Endpoint to start the simulation
app.post('/simulation/start', (req, res) => {
  console.log('Simulation started');
  res.sendStatus(200);
});

// Endpoint to stop the simulation
app.post('/simulation/stop', (req, res) => {
  console.log('Simulation stopped');
  res.sendStatus(200);
});

// Endpoint to get vehicle positions
app.get('/simulation/vehicles', (req, res) => {
  res.json(vehiclePositions);
});

// Endpoint to update vehicle positions
app.put('/simulation/vehicles', (req, res) => {
  vehiclePositions = req.body;
  res.json(vehiclePositions);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
