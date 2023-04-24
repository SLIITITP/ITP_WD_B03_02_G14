const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
  

    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    itininary: {
        type: String,
        required: true
    },
   
    fprice: {
        type: Number,
        required: true
    },
   
    image: {
        type: String,
        required: true
    }
   
});

module.exports = mongoose.model("Package", packageSchema);