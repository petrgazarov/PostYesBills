// express

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/bundle.js', (request, response) => {
  response.sendFile(__dirname + '/bundle.js');
});

app.get('/style.css', (request, response) => {
  response.sendFile(__dirname + '/style.css');
});

app.listen(process.env.PORT || 8080)
