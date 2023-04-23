//ashen4 //12luMK5q4
const express = require('express');
const mongoose = require('mongoose'); //invoke mongoose
const router = require("./routes/package-route");
const cors = require('cors');
const app = express(); //invoke express

//app middlewares
app.use(express.json());
app.use(cors());
app.use("/packages",router);//localhost:5000/packages


mongoose.connect(
    "mongodb+srv://ashen4:12luMK5q4@packagemgt1.w2zmqib.mongodb.net/package?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database!"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));