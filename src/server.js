const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const server = express()

mongoose.connect('link',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

server.use(express.json())
server.use(routes)
server.listen(3333)