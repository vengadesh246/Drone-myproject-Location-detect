// src/App.js
import React, { useState } from 'react';
import MapComponent from './DroneComponents/MapComponent';
import pilotsData from './DroneComponents/DummyData'; // Ensure the filename matches exactly, including case

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const adminCoords = { latitude: 40.712776, longitude: -74.005974 }; // Example of adminCoords, replace with actual geolocation or mock data

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPilots = pilotsData.filter(
    (pilot) =>
      pilot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pilot.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <h1>Drone Pilots Map</h1>
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ margin: '10px', padding: '5px', width: '300px' }}
      />
      <MapComponent adminCoords={adminCoords} pilotsData={filteredPilots} />
    </div>
  );
};

export default App;


