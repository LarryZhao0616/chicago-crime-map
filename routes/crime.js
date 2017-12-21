var express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res, next) => {
    db.query('SELECT id,date,time,primary_type,description,beat,community_area,latitude,longitude,location FROM chicago_crimes_1', function(err, result) {
	if(err) {
	    return next(err);
	}
	//	console.log(result.rows[0]);
	res.send(result);
    });
});

module.exports = router;
