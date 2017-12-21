var express = require('express');
//const router = express.Router();
// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const Router = require('express-promise-router');
const db = require('../db');
const router = new Router()

router.get('/', async (req, res) => {
    try{
	const start = Date.now();
	const { rows } = await db.query('SELECT id,date,time,primary_type,description,beat,community_area,latitude,longitude,location FROM chicago_crimes_1');
	const duration = Date.now()-start;
	const rowlength = rows.length;
	console.log('executed query',{ duration, rowlength});
	res.send(rows);
    }
    catch(err){
	console.log('there was an err when query in db',err);
    }
});


module.exports = router;
