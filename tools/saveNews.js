var mongoose = require('mongoose');
const MONGOLAB_URI  = "mongodb://111:111@ds263707.mlab.com:63707/chicago-crime-map"
mongoose.connect(MONGOLAB_URI);
var News = require('../models/News.js');


var newsdata = {
    title :"Police probe 4 armed robberies in south suburbs, northwest Indiana",
    link :"http://www.chicagotribune.com/suburbs/daily-southtown/news/ct-sta-armed-robberies-investigation-st-0126-20180125-story.html",
    date :"Jan 25, 2018",
    from :"Chicago Tribune",
    imgsrc :"http://www.trbimg.com/img-5a6a352b/turbine/ct-ctlh-ct-sta-armed-robberies-investiga-20180125/777/777x437" ,
    parts :"Four area police departments are collaborating in an investigation into a string of armed robberies believed..."
}


News.create(newsdata,function (error, res){
    if (error){
	console.log(error);
    } else {
	console.log("update news successfully!");
    }
});
