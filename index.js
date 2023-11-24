const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
const portNumber = process.env.PORT;
const app = express();

app.use('/api', routes)

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(portNumber, () => {
    console.log(`Server Started at ${portNumber}`)
})