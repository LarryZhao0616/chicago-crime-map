const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewsSchema = new Schema({
    title: {
    type: String,
    },
    link: {
    type: String,
     },
    date: {
    type: String,
    },
    from: {
    type: String,
    },
    imgsrc: {
    type: String,
    },
    parts: {
    type: String,
    }

});

const News = mongoose.model('news', NewsSchema);
module.exports = News;
