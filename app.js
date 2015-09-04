//npm requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var pg = require('pg');
var conString = "postgres://localhost/Northwind";

var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: true}));

//route
app.use('/', routes);

var client = new pg.Client(conString);
  client.connect(function (err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    };

    client.query('SELECT * FROM Categories', function (err, result) {
      console.log(result);

    })
  });

// errors
app.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});

// pass 4 arguments to create an error handling middleware
app.use(function (req, res) {
  console.log('ERRRRRRRRRR', err.stack);
  res.status(500).send('My Bad');
});

var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});
