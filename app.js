const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const ideas = require('./routes/ideas');

// Port Number
const port = process.env.PORT || 3000;

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ' + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

const app = express();

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'frontend/src')));

// Body Parser Middleware
// app.use(bodyParser.json());

app.use('/ideas', ideas);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
