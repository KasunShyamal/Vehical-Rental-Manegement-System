const router = require("express").Router();
let Service = require("../models/Servicedetail");



//create 
router.route("/add").post((req,res)=>{

    const vehicleNo = req.body.vehicleNo;
    const dos = Date(req.body.dos);
    const Mileageatservice =Number(req.body.Mileageatservice);
    const PerformedBy = req.body.PerformedBy;
    const Note = req.body.Note;

    const newservices = new Service({

        vehicleNo,
        dos,
        Mileageatservice,
        PerformedBy,
        Note
})

    newservices.save().then(()=>{
    res.json("Services Added")
}).catch((err)=>{
    console.log(err);
})
})
//get all data
router.route("/").get((req,res)=>{
    Service.find().exec((err,service) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingService:service
        });
    });
});

   //update data
   router.put('/update/:id',(req, res)=>{
    
    Service.findByIdAndUpdate(
        req.params.id,
    
    {
        $set:req.body
    },
    (err,service)=>{
        if(err){
            return res.status(400).json({error:err});
        }

        return res.status(200).json({
            success:"update"
        });
    }
  );
});
    

    
router.delete('/delete/:id' ,(req, res)=>{
    Service.findByIdAndRemove(req.params.id).exec((err,deletedService) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedService
        });
    })
    
});
 router.get("/get/:id",(req, res)=>{
     let userid = req.params.id;
      Service.findById(userid,(err,service) =>{
          if(err){
              return res.status(400).json({success:false, err});

          }
          return res.status(200).json({
              success:true,
              service
          });
      });
    });
       
module.exports = router;
