const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/database'

const connect = mongoose.connect(url);

connect.then(db => {
    console.log('server is running');
}, (err) => {console.log(err)});