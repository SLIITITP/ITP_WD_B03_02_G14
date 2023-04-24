const router = require ("express").Router();
const user = require("../module/user");
let driver =require ("../module/driver");




//data display

router.route("/").get((req,res)=>{
    user.find().then((driver)=>{
        res.json(driver)
    }).catch((err)=>{
        console.log(err)
    })
})




//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let userId = req.params.id;
    const{username,password,email,firstNam, lastName,mobile,address,profile}= req.body;

    const updateCustomer = {
        
        username,
        password,
        email,
        firstNam,
         lastName,
         mobile,
         address,
         profile
    }

    const update = await user.findByIdAndDelete(userId,updateCustomer)
    .then(()=>{
        res.status(200).send({status: "user deleted "})

    }).catch((err)=>{
        console.log (err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
        
    })

})







module.exports =router;



 