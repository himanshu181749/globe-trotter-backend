const express = require('express');
const cors = require('cors');
const { getRandomDestination, getAllDestinations } = require('./destinations');

const app = express();
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors({origin: 'https://globe-trotter-frontend-1.onrender.com/'}));
app.use(express.json());

app.get('/api/destination', (req, res) => {
  res.json(getRandomDestination());
});

app.get('/api/destinations', (req, res) => {
  res.json(getAllDestinations());
});

app.listen(5000, () => console.log('Server running on port 5000'));