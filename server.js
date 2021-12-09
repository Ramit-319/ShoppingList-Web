const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require('./routes/api/items')

const app = express();

//BodyParser middleware

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;


//COnnect to Mongo
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true })
  .then(() => console.log('Mongo DB Connected...'))
  .catch(err => console.log(err));


//Use routes
app.use('/api/items', items)

//port on which the server should run, process.env.PORT is for herokku deployments
// or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));


//API get requests from our front end, to fetch items, post items and delete them on the database
