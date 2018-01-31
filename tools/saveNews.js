var mongoose = require('mongoose');
const MONGOLAB_URI  = "mongodb://111:111@ds263707.mlab.com:63707/chicago-crime-map"
mongoose.connect(MONGOLAB_URI);
var News = require('../models/News.js');


var newsdata = {
    title :"Police: 3 robberies reported this month in Bronzeville",
    link :"https://chicago.suntimes.com/news/police-3-robberies-reported-this-month-in-bronzeville/",
    date :"Jan 30, 2018",
    from :"Sun-Times",
    imgsrc :"https://suntimesmedia.files.wordpress.com/2017/12/police-lights91-300x18812.jpg?w=617&zoom=2" ,
    parts :"Police are South Side warning residents about three robberies that were reported this month in the Bronzeville neighborhood..."
}


News.create(newsdata,function (error, res){
    if (error){
	console.log(error);
    } else {
	console.log("update news successfully!");
    }
});
