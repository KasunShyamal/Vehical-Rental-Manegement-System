const router = require("express").Router();
let services = require("../models/services.js");

router.route("./add").post((req,res)=>{

    const vehicleNo = req.body.name;
    const dos = Number(req.body.age);
    const Mileageatservice = req.body.name;
    const PerformedBy = req.body.name;
    const Note = req.body.name;

    const newservices = new services({

        vehicleNo,
        dos,
        Mileageatservice,
        PerformedBy,
        Note
})

newServices.save().then(()=>{
    res.json("Service Added")
}).catch((err)=>{
    console.log(err);
})
})

router.route("/").get((req,res)=>{

    services.find().then((services)=>{
        res.json(services)
    }).catch((err)=>{
        console.log(err)
    });
});

router.route("/update/:id").put(async(req, res)=>{
    let userId = req.params.id;
    const{vehicleNo,dos,Mileageatservice,PerformedBy,Note} = req.body;

    const updateServices ={
        vehicleNo,
        dos,
        Mileageatservice,
        PerformedBy,
        Note
    }

    const update = await services.findByIdAndUpdate(userId.updateServices)
    .then(() =>{
        res.status(200).send({status: "updated", user:update})
    }).catch((err) =>{
        cosole.log(err);
        res.status(500).send({status: "error with updating data",error: err.message});
    });
    
    
});

router.route("/delete/:id").delete(async(req, res)=>{
    let userId = req.params.id;

    await services.findByIdAndDelete(userId)
     .then(() =>{
         res.status(200).send({status: "deleted"});
     }).catch((err) =>{
         console.log(err.message);;
         res.status(500).send({status: "error with delete data",error: err.message});
     });


 });

 router.route("/get/:id").get(async(req, res)=>{
     let userid = req.params.id;
     const user = await services.findById(userid)
       .then(() =>{
           res.status(200).send({status: "user fechted", user:user})
        }).catch(() => {
            console.log(err.massege);
            res.status(500).send({status: "error with get user",error: err.masssage});

        });
        });

module.exports = router;
