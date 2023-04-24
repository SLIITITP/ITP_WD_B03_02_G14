const router = require ("express").Router();
let driver =require ("../module/driver");



router.route("/add").post((req,res)=>{
    const empid = req.body.empid;
    const name = req.body.name;
    const email = req.body.email;
    const mobile_number = req.body.mobile_number;
    const NIC = req.body.NIC;
    const gender = req.body.gender;
    const location =req.body.location;
    const license_number =req.body.license_number;
    const lexpire_date =req.body.lexpire_date;
    const image =req.body.image;
    





    const newdriver = new driver({
        empid,
        name,
        email,
        mobile_number,
        NIC,
        gender,
        location,
        license_number,
        lexpire_date,
        image
        
    })

    newdriver.save().then(()=>{
        res .json("driver Added")

    }).catch((err)=>{
        console.log(err)
    })




})

//data display

router.route("/").get((req,res)=>{
    driver.find().then((driver)=>{
        res.json(driver)
    }).catch((err)=>{
        console.log(err)
    })
})


//update data

router.route("/update/:id").put(async(req,res) =>{

    let driverId = req.params.id;
    const{empid,name,email,mobile_number,NIC,gender,location,license_number,lexpire_date}= req.body;

    const updatedriver = {
        empid,
        name,
        email,
        mobile_number,
        NIC,
        gender,
        location,
        license_number,
        lexpire_date
    }

 await driver.findByIdAndUpdate(driverId,updatedriver)
    .then(()=>{
        res.status(200).send({status: "driver updateed "})

    }).catch((err)=>{
        console.log (err);
        res.status(500).send({status:"Error with updating date",error:err.message});

    })

})

//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let driverId = req.params.id;
    const{empid,name,email,mobile_number,NIC,gender,location,license_number,lexpire_date,image}= req.body;

    const updatedriver = {
        empid,
        name,
        email,
        mobile_number,
        NIC,
        gender,
        location,
        license_number,
        lexpire_date,
        image
    }

    const update = await driver.findByIdAndDelete(driverId,updatedriver)
    .then(()=>{
        res.status(200).send({status: "driver deleted "})

    }).catch((err)=>{
        console.log (err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
        
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    try {
      const user = await driver.findById(userId);
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with fetching user", error: err.message });
    }
  });

module.exports =router;



 