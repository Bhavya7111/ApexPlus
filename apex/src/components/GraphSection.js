import React, { useState, useEffect } from "react";
import "./GraphSection.css";

const GraphSection = ({ vehiclesData }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    
    const initialVehicles = vehiclesData.map((vehicle) => ({
      ...vehicle,
      color: getRandomColor(), 
    }));
    setVehicles(initialVehicles);

    const interval = setInterval(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => {
          let newX = vehicle.position_x;
          let newY = vehicle.position_y;

          
          const distancePerUpdate = vehicle.speed;

        
          switch (vehicle.direction) {
            case "towards":
              newX += distancePerUpdate;
              break;
            case "backwards":
              newX -= distancePerUpdate;
              break;
            case "upwards":
              newY += distancePerUpdate;
              break;
            case "downwards":
              newY -= distancePerUpdate; 
              break;
            default:
              break;
          }

          
          newX = Math.max(0, Math.min(newX, 915));
          newY = Math.max(0, Math.min(newY, 375));

          return { ...vehicle, position_x: newX, position_y: newY };
        })
      );
    }, 1000); 

    return () => clearInterval(interval);
  }, [vehiclesData]);


  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

 
  const minX = 0;
  const minY = 0;
  const maxX = 915;
  const maxY = 375;

 
  const graphWidth = maxX - minX; 
  const graphHeight = maxY - minY;

  
  const numHorizontalLines = 10;
  const numVerticalLines = 18;

  
  const horizontalSpacing = graphHeight / numHorizontalLines;
  const verticalSpacing = graphWidth / numVerticalLines;

  return (
    <div className="graph-section">
      <div className="graph-area">
        {}
        {[...Array(numHorizontalLines)].map((_, index) => (
          <div
            key={`horizontal-line-${index}`}
            className="graph-line horizontal"
            style={{ top: index * horizontalSpacing }}
          ></div>
        ))}
        {}
        {[...Array(numVerticalLines)].map((_, index) => (
          <div
            key={`vertical-line-${index}`}
            className="graph-line vertical"
            style={{ left: index * verticalSpacing }}
          ></div>
        ))}
        {}
        {vehicles.map((vehicle) => {
          
          const vehicleX = vehicle.position_x - minX;
          const vehicleY = vehicle.position_y - minY;

         
          if (vehicleX >= 0 && vehicleX <= 915 && vehicleY >= 0 && vehicleY <= 375) {
            return (
              <div
                key={vehicle.id}
                className="vehicle"
                style={{ transform: `translate(${vehicleX}px, 0)`, bottom: `${vehicleY}px` }}
              >
                <div className="vehicle-circle" style={{ backgroundColor: vehicle.color }}>
                  {vehicle.id}
                </div>
              </div>
            );
          } else {
            return null; 
          }
        })}
      </div>
    </div>
  );
};

export default GraphSection;
