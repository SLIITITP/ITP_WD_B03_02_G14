const router = require ("express").Router();
let Employee =require ("../module/Employee");



router.route("/add").post ((req,res)=>{

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
    const mobile_number = req.body.mobile_number;
    const NIC = req.body.NIC;
    const gender = req.body.gender;
    const etype = req.body.etype;
    const image = req.body.image;




    const newEmployee = new Employee({
        username,
        password,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype,
        image
        
    })

    newEmployee.save().then(()=>{
        res .json("Employee Added")

    }).catch((err)=>{
        console.log(err)
    })




})

//data display

router.route("/").get((req,res)=>{
    Employee.find().then((Employee)=>{
        res.json(Employee)
    }).catch((err)=>{
        console.log(err)
    })
})


//update data

router.route("/update/:id").put(async(req,res) =>{

    let EmployeeId = req.params.id;
    const{username,password,email,name,mobile_number,NIC,gender,etype}= req.body;

    const updateEmployee = {
        
        username,
        password,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype
    }

 await Employee.findByIdAndUpdate(EmployeeId,updateEmployee)
    .then(()=>{
        res.status(200).send({status: "Employee updateed "})

    }).catch((err)=>{
        console.log (err);
        res.status(500).send({status:"Error with updating date",error:err.message});

    })

})

//delete
router.route("/delete/:id").delete (async(req,res) =>{
    let EmployeeId = req.params.id;
    const{username,password,email,name,mobile_number,NIC,gender,etype,image}= req.body;

    const updateEmployee = {
        
        username,
        password,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype,
        image
    }

    const update = await Employee.findByIdAndDelete(EmployeeId,updateEmployee)
    .then(()=>{
        res.status(200).send({status: "user deleted "})

    }).catch((err)=>{
        console.log (err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
        
    })

})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    try {
      const user = await Employee.findById(userId);
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "Error with fetching user", error: err.message });
    }
  });







module.exports =router;



 