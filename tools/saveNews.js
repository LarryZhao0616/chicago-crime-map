var mongoose = require('mongoose');
const MONGOLAB_URI  = "mongodb://111:111@ds263707.mlab.com:63707/chicago-crime-map"
mongoose.connect(MONGOLAB_URI);
var News = require('../models/News.js');


var newsdata = {
    title :"15-year-old boy shot multiple times after answering front door of Lawndale home",
    link :"http://abc7chicago.com/15-year-old-boy-shot-multiple-times-after-answering-front-door-of-lawndale-home/2966202/",
    date :"Jan 19, 2018",
    from :"abc7chicago.com",
    imgsrc :"http://cdn.abclocal.go.com/content/wls/images/cms/automation/images/2966207_630x354.jpg" ,
    parts :"A 15-year-old boy was shot when he answered the door to his Lawndale home Thursday evening, police said..."
}


News.create(newsdata,function (error, res){
    if (error){
	console.log(error);
    } else {
	console.log("update news successfully!");
    }
});
