var conString = "postgres://njvjuvud:FlobCKLELB5jwTn1jssLx1T4OBI0_n-s@baasu.db.elephantsql.com:5432/njvjuvud";
//const { Pool } = require('pg');
//const pool = new Pool(conString);
var pg = require('pg');

var pool = new pg.Pool({
    user:'njvjuvud',
    host:'baasu.db.elephantsql.com',
    database:'njvjuvud',
    password:'FlobCKLELB5jwTn1jssLx1T4OBI0_n-s',
    port:5432,
});

pool.connect((err, client, done) => {
    if (err) return console.log(err);
    client.query('SELECT * FROM chicago_crimes_1',(err, res) => {
	if (err) {
	    console.log(err);
	} else {
	    console.log(res.rows[0]);
	}
    })
})
