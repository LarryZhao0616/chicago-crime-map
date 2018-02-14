var mongoose = require('mongoose');
const MONGOLAB_URI  = "mongodb://111:111@ds263707.mlab.com:63707/chicago-crime-map";
mongoose.connect(MONGOLAB_URI);
var News = require('../models/News.js');


var newsdata = {
    title :"Chicago Police Commander Killed on Busy Downtown Block",
    link :"https://www.nytimes.com/2018/02/13/us/chicago-police-commander-killed.html",
    date :"Fev 13, 2018",
    from :"nytimes",
    imgsrc :"https://static01.nyt.com/images/2018/02/14/us/14chicago/14chicago-master768.jpg" ,
    parts :"A high-ranking Chicago police officer was fatally shot on Tuesday afternoon within sight of City Hall..."
}


News.create(newsdata,function (error, res){
    if (error){
	console.log(error);
    } else {
	console.log("update news successfully!");
    }
});
