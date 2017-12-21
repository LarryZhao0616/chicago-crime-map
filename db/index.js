var conString = "postgres://njvjuvud:FlobCKLELB5jwTn1jssLx1T4OBI0_n-s@baasu.db.elephantsql.com:5432/njvjuvud";
//const { Pool } = require('pg');
//const pool = new Pool(conString);
var pg = require('pg');
var pool = new pg.Pool({
    user:'njvjuvud',
    host:'baasu.db.elephantsql.com',
    database:'njvjuvud',
    password:'FlobCKLELB5jwTn1jssLx1T4OBI0_n-s',
    port:5432
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}

/*
module.exports = {
    query: (text, params, callback) => {
	const start = Date.now();
	return pool.query(text, params, (err,res) =>{
	    const duration = Date.now()-start;
	    console.log('hi');
	    console.log('executed query',{text, duration, rows:res.rowCount});
	    callback(err,res);
	});
    }
};
 
 */
