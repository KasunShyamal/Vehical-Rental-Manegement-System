const router = require("express").Router();
let Staff = require("../models/Staff.js");


//add new members
router.route('/add').post((req, res) => {

  let newStaff = new Staff(req.body);
  newStaff.save()
    .then(() => {
        res.status(200).send({status: "Add new staff member"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error occured with add details", error: err.message});
    })
})


//read all staff details
router.route("/").get((req,res) => {
    
    Staff.find().then((Staff) => {
        res.json(Staff)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with view data", error: err.message});
    })


//edit,update profile
router.route("/update/:nic").put(async(req,res) => {
    let userID = req.params.nic;
    const {name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password} = req.body;
//$set:req.body; == line 33
    const updateStaff = {
        name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password
    }

    const update = await Staff.findOneAndUpdate(NIC, updateStaff)
    .then(() => {
        res.status(200).send({status: "Staff member updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
}) 


//delete profile
router.route("/delete/:nic").delete(async (req,res) => {
    let userID = req.params.nic;

    await Staff.findOneAndDelete(NIC)
    .then(()=> {
        res.status(200).send({status: "Staff member deleted"});
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with delete member", error:err.message});
    })
})

//search a staff member's details
router.route("/get/:nic").get(async (req, res) => {
    let userID = req.params.nic;
    const user = await Staff.findOne(NIC)
    .then((Staff) => {
        res.status(200).send({status: "Staff member fetched",Staff})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with get Staff member", error: err.message});
    })
})

})

module.exports = router;