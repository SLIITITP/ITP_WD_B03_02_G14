
const express = require('express');
const mongoose = require('mongoose'); //invoke mongoose
const router = require("./routes/package-route");
const router2 = require("./routes/booking-route");
const cors = require('cors');
const app = express(); //invoke express

//app middlewares
app.use(express.json());
app.use(cors());
app.use("/packages",router);//localhost:5000/packages
app.use("/bookings",router2);//localhost:5000/bookings


mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.euyskm1.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database!"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));