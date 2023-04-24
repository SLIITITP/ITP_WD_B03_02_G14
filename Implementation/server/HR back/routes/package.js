const router = require ("express").Router();
let Package =require ("../module/package");


//data display

router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
});
module.exports =router;
