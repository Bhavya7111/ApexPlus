# Vehicle Simulation Application

## Overview

This application is a vehicle simulation tool built using React.js. It allows users to create, display, update, and delete scenarios and vehicles. Each scenario can have multiple vehicles, which move based on the given parameters when the simulation is started.

## Features

- **Scenario Management**: Create, view, update, and delete scenarios.
- **Vehicle Management**: Add, view, update, and delete vehicles within a scenario.
- **Simulation**: Start a simulation where vehicles move according to their speed and direction until the scenario time elapses.
- **Validation**: Ensures vehicle positions are within the bounds of the container.

## Data Model

### Scenario

- `id`: Unique identifier for the scenario.
- `name`: Name of the scenario.
- `time`: Duration of the scenario.

### Vehicle

- `id`: Unique identifier for the vehicle.
- `name`: Name of the vehicle.
- `initialPositionX`: Initial X-coordinate of the vehicle.
- `initialPositionY`: Initial Y-coordinate of the vehicle.
- `speed`: Speed of the vehicle.
- `direction`: Direction of the vehicle (Towards, Backwards, Upwards, Downwards).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/vehicle-simulation-app.git
   cd vehicle-simulation-app
Install dependencies:

Using npm:

bash
Copy code
npm install
Using yarn:

bash
Copy code
yarn install
Set up json-server:

Install json-server globally if you haven't already:

bash
Copy code
npm install -g json-server
Run json-server:

bash
Copy code
json-server --watch db.json --port 5000
Running the Application
Start the React application:

Using npm:

bash
Copy code
npm start
Using yarn:

bash
Copy code
yarn start
Access the application:

Open your browser and go to http://localhost:3000.

Deployment
This application is deployed on Vercel. You can access it here.

Usage
Create a Scenario:

Navigate to the "Scenarios" section.
Click on "Add Scenario" and fill in the required details.
Save the scenario.
Add Vehicles to a Scenario:

Select a scenario from the list.
Click on "Add Vehicle" and fill in the required details, ensuring the initial positions are within the container bounds.
Save the vehicle.
Start Simulation:

Select a scenario.
Click on "Start Simulation".
Vehicles will move according to their speed and direction until the scenario time elapses.
Project Structure
src/: Contains the React components and styles.
db.json: Contains the mock data for json-server.
public/: Public assets and the main HTML file.
Technologies Used
React.js
json-server
Vercel (for deployment)
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
License
This project is licensed under the MIT License.

Acknowledgements
Thanks to the team for the opportunity to work on this project and the community for their support and resources.