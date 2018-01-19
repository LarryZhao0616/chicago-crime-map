var mongoose = require('mongoose');
const MONGOLAB_URI  = "mongodb://111:111@ds263707.mlab.com:63707/chicago-crime-map"
mongoose.connect(MONGOLAB_URI);
var News = require('../models/News.js');


var newsdata = {
    title :"Suspects in carjacked Mustang lead cops on nearly hour-long chase around Chicago",
    link :"https://chicago.suntimes.com/news/suspects-in-carjacked-mustang-lead-cops-on-nearly-hour-long-chase-around-chicago/",
    date :"Jan 19, 2018",
    from :"Chicago Sun-Times",
    imgsrc :"https://suntimesmedia.files.wordpress.com/2018/01/mustangchase1.jpg?w=637&zoom=2" ,
    parts :"A high-speed chase of a carjacked Mustang that lasted nearly 45 minutes early Friday resulted in the arrest of two people in the South Side Gresham..."
}


News.create(newsdata,function (error, res){
    if (error){
	console.log(error);
    } else {
	console.log("update news successfully!");
    }
});
