var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://njvjuvud:FlobCKLELB5jwTn1jssLx1T4OBI0_n-s@baasu.db.elephantsql.com:5432/njvjuvud";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT id,date,time,primary_type,description,beat,community_area,latitude,longitude,location FROM chicago_crimes_1', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
});
