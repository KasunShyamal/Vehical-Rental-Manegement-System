const router = require("express").Router();
let inquiry = require("../models/inquiry");

/* http://Localhost:8092/student/newInquiry */

router.route("/newInquiry").post((req,res)=>{

    const name = req.body.name;
    const contactNumber = req.body.contactnumber;
    const email = req.body.email;
    const note = req.body.note;

    const newInquiry = new inquiry({

        name,
        contactNumber,
        email,
        note

    })

    newInquiry.save().then(()=>{
        res.json("Inquiry sent");
    }).catch((err)=>{
        console.log(err);
    })

})
/* http://Localhost:8092/inquiry/  */ 
// inquiry review page 

router.route("/").get((req,res)=>{

    inquiry.find().then((inquiryrt)=>{
        res.json(inquiryrt)
    }).catch((err)=>{
        console.log(err)
    })

})

//dont need to update inquiry

//dont need to delete inquiry

module.exports = router;







