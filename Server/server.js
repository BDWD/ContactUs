// Express
const express = require('express');
const app = express();

// Database

const mongoose = require('mongoose');
const uri = require('./config/database').mongoURI;

port = 3000;

// Connection to mongoDb

mongoose.connect(uri, {useNewUrlParser: true})
.then(() => console.log('MondoDb connected...')).catch(err => console.log(err))


app.listen(port, console.log(`Server is running on port ${port}`))
