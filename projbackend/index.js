const express = require('express');
var app = express();



var bodyParser = require("body-parser");
app.use(bodyParser.json());



var cors = require('cors')
app.use(cors())



const my_mongoose = require('./dbconnect.js');
   

const registrationAPI = require('./controllers/registartionAPI');

app.use('/reg',registrationAPI);


app.listen(4500, () => console.log('EXPRESS Server Started at Port No: 4500 '));
