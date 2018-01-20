var express = require('express');
var crime = require('./crime');
var newsdata = require('./newsdata');

module.exports = (app) => {
    app.use('/crime', crime);
    app.use('/newsdata', newsdata);
}


