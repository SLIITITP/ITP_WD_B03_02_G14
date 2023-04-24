const router = require ("express").Router();
let room =require ("../module/room");


//data display

router.route("/").get((req,res)=>{
    room.find().then((room)=>{
        res.json(room)
    }).catch((err)=>{
        console.log(err)
    })
});
module.exports =router;