var express = require('express');
var phone = require('./phone');


var app = express.createServer();
app.set('view engine', 'mustache');

app.use(express.logger('dev'));
app.use(express.limit('10mb'));
app.use(express.bodyParser());
app.use(express.query());
app.use(app.router);
app.use(express['static']('public'));
app.use(express.errorHandler({showMessage: true, showStack: true}));

app.get('/', function(req,res,next){
  res.render('index');
});

app.post('/sms', function(req, res, next){
  console.log( util.inspect( req.body ));
  var msg = req.body.Body;
  res.setHeader('Content-Type', 'text/plain');
  res.end(msg);
});

app.all('/voice', phone);

app.listen(9991);
