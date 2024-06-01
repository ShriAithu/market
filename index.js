// index.js

const express = require('express');
const cron = require('node-cron');

const app = express();

// Define your cron job schedule
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
  // You can put your task logic here
});

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
