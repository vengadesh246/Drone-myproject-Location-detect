// src/DroneComponents/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import data1 from './Images/1.png';
import data2 from './Images/2.png';
import data3 from './Images/3.png';
import data4 from './Images/4.png';
import data5 from './Images/5.png';

const adminIcon = new L.Icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const pilotIcon = new L.Icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const MapComponent = ({ adminCoords, pilotsData }) => {
    const { latitude: adminLat, longitude: adminLng } = adminCoords;

    return (
        <MapContainer center={[adminLat, adminLng]} zoom={5} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {adminLat && adminLng && (
                <Marker position={[adminLat, adminLng]} icon={adminIcon}>
                    <Popup>
                        <div>
                            <p><strong>Admin Location</strong></p>
                            <p>Latitude: {adminLat}</p>
                            <p>Longitude: {adminLng}</p>
                        </div>
                    </Popup>
                </Marker>
            )}
            {pilotsData.map((pilot, index) => (
                <Marker key={index} position={[pilot.latitude, pilot.longitude]} icon={pilotIcon}>
                    <Popup>
                        <div>
                            <img src={pilot.profileImage} alt={pilot.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                            <p><strong>{pilot.name}</strong></p>
                            <p>Experience: {pilot.workExperience} years</p>
                            <p>Location: {pilot.location}</p>
                            {/* Add additional fields as needed */}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;


// // src/DroneComponents/MapComponent.js
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import data1 from './Images/1.jpg';
// import data2 from './Images/2.jpg';
// import data3 from './Images/3.JPG';
// import data4 from './Images/4.jpg';
// import image from './Images/5.JPG';


// const adminIcon = new L.Icon({
//     iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
// });

// const pilotIcon = new L.Icon({
//     iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
// });

// const MapComponent = ({ adminCoords, pilotsData }) => {
//     const { latitude: adminLat, longitude: adminLng } = adminCoords;

//     return (
//         <MapContainer center={[adminLat, adminLng]} zoom={5} style={{ height: '400px', width: '100%' }}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//             {adminLat && adminLng && (
//                 <Marker position={[adminLat, adminLng]} icon={adminIcon}>
//                     <Popup>
//                         <div>
//                             <p><strong>Admin Location</strong></p>
//                             <p>Latitude: {adminLat}</p>
//                             <p>Longitude: {adminLng}</p>
//                         </div>
//                     </Popup>
//                 </Marker>
//             )}
//             {pilotsData.map((pilot, index) => (
//                 <Marker key={index} position={[pilot.latitude, pilot.longitude]} icon={pilotIcon}>
//                     <Popup>
//                         <div>
//                             <img src={pilot.profileImage} alt={pilot.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
//                             <p><strong>{pilot.name}</strong></p>
//                             <p>Experience: {pilot.workExperience} years</p>
//                             <p>Location: {pilot.location}</p>
//                             {/* Add additional fields as needed */}
//                         </div>
//                     </Popup>
//                 </Marker>
//             ))}
//         </MapContainer>
//     );
// };

// export default MapComponent;
