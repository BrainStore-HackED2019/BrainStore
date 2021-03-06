const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const ideas = require('./routes/ideas');
const topics = require('./routes/topics');

// Port Number
const port = process.env.PORT || 3000;

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to Database ' + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'frontend/src')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/ideas', ideas);
app.use('/topics', topics)

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
