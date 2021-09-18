// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.1975, -97.6664], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [44.8848, -93.2223],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line,
    {
    color: "blue",
    opactity: 0.5,
    dashArray: '5,10'
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);