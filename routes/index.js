var express = require('express');
var crime = require('./crime');

module.exports = (app) => {
  app.use('/crime', crime)
}


