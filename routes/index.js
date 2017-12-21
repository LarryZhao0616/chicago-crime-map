var express = require('express');
var router = express.Router();
var crime = require('./crime');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


