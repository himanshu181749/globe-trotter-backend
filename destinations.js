const fs = require('fs');

const destinations = JSON.parse(fs.readFileSync('./destinations.json', 'utf8'));

const getRandomDestination = () => destinations[Math.floor(Math.random() * destinations.length)];
const getAllDestinations = () => destinations;

module.exports = { getRandomDestination, getAllDestinations };