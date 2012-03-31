var util = require('util');

var parser = function(req,res,next){
  req.body || next();
  console.log('parser!', util.inspect(req.body|| null));
  next();
};

var router = function(req,res,next){
  //res.setHeader('Content-Type', 'application/xml');
  res.end('I havent set up any twiml');
}

module.exports = exports = [parser, router];

