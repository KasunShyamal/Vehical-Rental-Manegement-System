
const express = require('express')
const router = express.Router();
//const multer=require("multer");

let Vehicles = require('../models/vehicleModel');


router.post("/create", (req, res) => {
      const newVehicle = new Vehicles({
      
        vehicle_model:req.body.vehicle_model,
        vehicle_name:req.body.vehicle_name,
        sheet_count:req.body.sheet_count,
        description:req.body.description,
        amenties:req.body.amenties,
        category:req.body.category,
        //articleImage=req.file.originalname
    
      });
newVehicle.save().then(()=>{
      res.json("vehicle scussfully created");
    }) .catch((error)=>{
        console.log(error);

    })
  })
  router.get("/",(req,res)=>{

    Vehicles.find()
    .then(vehicle=> res.json(vehicle))
    .catch(err=>res.status(400).res.json('Error: ${err}'))
     
  })
  //find by id
  router.get("/:id",(req,res)=>{

   Vehicles.findById(req.params.id)
    .then(vehicle=> res.json(vehicle))
    .catch(err=>res.status(400).res.json('Error: ${err}'))
     
  })
//find  by id and update

router.put("/update/:id",(req,res)=>{
Vehicles.findById(req.params.id)//catct the id from url
   //distrucer 
   .then(vehicle=>{
     
     vehicle.vehicle_model=req.body.vehicle_model;
     vehicle.vehicle_name=req.body.vehicle_name;
     vehicle.sheet_count=req.body.sheet_count;
     vehicle.description=req.body.description;
     vehicle.amenties=req.body.amenties;
     vehicle.category=req.body.category;
     //vehicle.articleImage=req.file.originalname
     vehicle
     .save()
     .then(()=>
      res.json("Update  scussfully"))
        .catch((err)=>
         res.status(500).json(`Error:${err}`))
   })
  })
   
 

router.delete('/:id',(req,res)=>{
  Vehicles.findByIdAndDelete(req.params.id)
  .then(()=>res.json("the vehicle deletete"))
  .catch((err)=>
  res.status(500).json(`Error:${err}`))
});
  module.exports=router;
