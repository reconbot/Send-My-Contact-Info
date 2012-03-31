var express = require('express');
var util = require('util');
var spawn = require('child_process').spawn;

var app = express.createServer();


app.use(express.logger('dev'));
app.use(express.limit('10mb'));
app.use(express.bodyParser());
app.use(express.query());
app.use(app.router);
app.use(express['static']('public'));
app.use(express.errorHandler({showMessage: true, showStack: true}));

app.post('/sms', function(req, res, next){
  console.log( util.inspect( req.body ));
  var msg = req.body.Body;
  res.setHeader('Content-Type', 'text/plain');
  res.end(msg);
});

app.post('/voice/new/', function(req, res, next){
  console.log( util.inspect(req.body));

  res.setHeader('Content-Type', 'application/xml');

  res.end('I havent set up any twiml');
});

app.listen(9991);
