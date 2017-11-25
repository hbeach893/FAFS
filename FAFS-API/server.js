import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
var bodyParser = require('body-parser');
const cors = require('cors');


// Connect to MongoDB
mongoose.connect('mongodb://localhost/inventoryitems');
mongoose.connect('mongodb://localhost/riderequests');
mongoose.connect('mongodb://localhost/driverequests');

// Initialize http server
const app = express();

const corsOptions = {
  methods: ['GET', 'PUT', 'POST'],
  origin: '*',
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
// Logger that outputs all requests into the console
app.use(morgan('combined'));

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use v1 as prefix for all API endpoints
app.use('/v1', router);



const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
