const express = require('express');
const server = express();
// ROUTES
const router = require('./routes/routes')
const notFound = require('./middleware/route-not-found');
// DATABASE
const connectDB = require('./db/connectDB')
require("dotenv").config();
const mongoose = require('mongoose')
const cors = require('cors')

//MIDDLEWARE
server.use(cors())
server.use(express.json())
server.use('/api/v1/allItems', router)
server.use(express.urlencoded({extended: true}))
server.use(notFound)

const port = 2000;

const start = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      server.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();