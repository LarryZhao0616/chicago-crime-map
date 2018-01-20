var express = require('express');
//const router = express.Router();
// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const Router = require('express-promise-router');
const router = new Router()

const mongoose = require('mongoose');
const MONGOLAB_URI  = "mongodb://111:111@ds263707.mlab.com:63707/chicago-crime-map"
mongoose.connect(MONGOLAB_URI);
var News = require('../models/News.js');

router.get('/', async (req, res) => {
    try{
	const start = Date.now();
	const  rows  = await News.find();
//	console.log(rows);
	const duration = Date.now()-start;
	console.log('successfullt fetch news data', duration);
	res.send(rows);
    }
    catch(err){
	console.log('there was an err when fetch newsdata from mongodb:',err);
    }
});


module.exports = router;
