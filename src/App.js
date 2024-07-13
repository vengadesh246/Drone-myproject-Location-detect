
import React, { useState, useEffect } from 'react';
import MapComponent from './DroneComponents/MapComponent';
import pilotsData from './DroneComponents/DummyData';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const adminCoords = {
    latitude: 12.971599,
    longitude: 77.594566,
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPilots = pilotsData.filter(
    (pilot) =>
      pilot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pilot.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


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
      <div>
        <h1>Dark Mode Toggle</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <h1>Drone Pilot Locations</h1>
        <MapComponent adminCoords={adminCoords} pilotsData={pilotsData} />
      </div>
    </div>

  );
};

export default App;


