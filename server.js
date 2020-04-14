const express = require('express');
const    app = express();

    port = process.env.Port || 3000;
const morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var readline = require('readline');

 const   mongoose = require('mongoose');
 const   Task = require('./api/models/covidModel');
 const   bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Tododb');

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json(Task));

// setup the logger 
var accessLogStream = fs.createWriteStream(
    './api/routes/access.log', { flags: 'a' }
);
app.use(morgan('tiny', { stream: accessLogStream }, {
    skip: (req, res) => req.url === '/api/v1/on-covid-19/logs'
}));

var routes = require('./api/routes/covidRoutes');
routes(app);

app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(r.route.path);
    }
});
 app.listen(port);

console.log('simple rest api started on: ' + port);