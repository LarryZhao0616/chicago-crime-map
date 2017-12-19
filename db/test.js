var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://njvjuvud:FlobCKLELB5jwTn1jssLx1T4OBI0_n-s@baasu.db.elephantsql.com:5432/njvjuvud";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});