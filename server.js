const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
// Route files
const palettes = require('./routes/palettes');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Initialize the app variable with express
const app = express();

// A route contains
// (1) an HTTP verb (GET, POST, ...) that identify the allowable request type
// *(2) an uri path / uri pattern / endpoint
// (3) a function that is called to handle that uri pattern

// Create a route that responds only to HTTP GET request to the root path
// Postman can send a GET request to the root path based on the base URI
// simply put, hit the endpoint with GET mothod
app.get('/', (req, res) => res.send('API running'));

// Mount the (palettes) router (with path /api/v1/palettes) on the app
app.use('/api/v1/palettes', palettes);

const PORT = process.env.PORT || 5000;

// run the server on the base URI by listening to a certain port
// express use req.baseUrl
// browser use document.baseURI
// A base URL is, basically, the consistent part of your web address.
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
