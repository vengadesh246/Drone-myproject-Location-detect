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

const pilotsData = [
    {
        id: 1,
        name: 'John',
        profileImage: data1,
        workExperience: 5,
        location: 'Chennai',
        latitude: 13.082680,
        longitude: 80.270721,
    },
    {
        id: 2,
        name: 'Vengad',
        profileImage: data2,
        workExperience: 3,
        location: 'Coimbatore',
        latitude: 11.016844,
        longitude: 76.955833,
    },
    {
        id: 3,
        name: 'Sridhar',
        profileImage: data3,
        workExperience: 8,
        location: 'Trichy',
        latitude: 10.790483,
        longitude: 78.704674,
    },
    {
        id: 4,
        name: 'Sujith',
        profileImage: data4,
        workExperience: 10,
        location: 'Bangalore',
        latitude: 12.971599,
        longitude: 77.594566,
    },
    {
        id: 5,
        name: 'Ruthra',
        profileImage: data5,
        workExperience: 7,
        location: 'Dindigul',
        latitude: 10.367312,
        longitude: 77.980293,
    },
    // Add more pilot data here as needed
];

export default pilotsData;

// import data1 from './Images / 1.jpg';
// import data2 from './Images/2.jpg';
// import data3 from './Images/3.JPG';
// import data4 from './Images/4.jpg';
// import image from './Images/5.JPG';


// const pilotsData = [
//     {
//         id: 1,
//         name: 'John',
//         profileImage: 'data1',
//         workExperience: 5,
//         location: 'Chennai',
//         latitude: 13.082680,
//         longitude: 80.270721,
//     },
//     {
//         id: 2,
//         name: 'Vengad',
//         profileImage: './Images/2.jpg',
//         workExperience: 3,
//         location: 'Coimbatore',
//         latitude: 11.016844,
//         longitude: 76.955833,
//     },
//     {
//         id: 3,
//         name: 'Sridhar',
//         profileImage: './Images/3.JPG',
//         workExperience: 8,
//         location: 'Trichy',
//         latitude: 10.790483,
//         longitude: 78.704674,
//     },
//     {
//         id: 4,
//         name: 'Sujith',
//         profileImage: './Images/4.jpg',
//         workExperience: 10,
//         location: 'Bangalore',
//         latitude: 12.971599,
//         longitude: 77.594566,
//     },
//     {
//         id: 5,
//         name: 'Ruthra',
//         profileImage: './Images/5.JPG',
//         workExperience: 7,
//         location: 'Dindigul',
//         latitude: 10.367312,
//         longitude: 77.980293,
//     },
//     // Add more pilot data here as needed
// ];

// export default pilotsData;
