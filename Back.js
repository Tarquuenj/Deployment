require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB')
);

// Example Route
app.get('/', (req, res) => {
    res.send('Expense Tracker API');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
