var util = require('util');
var nconf = require('nconf');

var twilioConf = nconf.env().argv().file({file: './config.json'}).get('twilio');

if(!twilioConf || ! twilioConf.sid || !twilioConf.token){
  console.error( util.inspect(twilioConf));
  throw new Error('Twilio settings are not set!');
}



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

