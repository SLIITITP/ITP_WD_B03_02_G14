const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    PhonNumber: {
        type : Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    imageurl :[],
    currentbookings:[],
    type : {
        type:String,
        required: true
    },
    description :{
        type: String,
        required:true
    },
    location :{
        type: String,
        required:true
    }

    
},{
    timestamp : true,
})

const roomModel = mongoose.model('rooms', roomSchema)

