const asyncHandler = require("express-async-handler");
const Add = require("../Models/add");



const getAdds =  asyncHandler(async (req,res) => {
    const add = await Add.find()
    res.json(add);
    
});

const createAdds = asyncHandler(async(req,res) =>{
    const {Name, Type, Email, ConNumber, Location, Description} = req.body;

    if(!Name || !Email || !ConNumber || !Location){
        res.status(400);
        throw new Error("Please fill all the Feilds");
    }
    else{
       
        const add = new Add({user_id: req.user._id, Name, Type,  Email, ConNumber, Location, Description});
console.log(req.user._id)
        const added = await add.save();

        res.status(201).json(added)
    }
});

const getAddById = asyncHandler(async(req,res) => {
    const add = await Add.findById(req.params.id);

    if(add){
        res.json(add);
    }
    else{
        res.status(404).json({message:"Advertisement Not Found"});
    }
});

const updateAdd = asyncHandler(async(req,res) => {
    const {Name, Email, ConNumber, Location, Description} = req.body;

    const add = await Add.findById(req.params.id);

   /* if(add.user.toString() !== req.user._id.toString()){
        throw new Error("Ypu cannot update This!")
    }*/
    if(add){
        add.Name = Name;
        add.Email = Email;
        add.ConNumber = ConNumber;
        add.Location = Location;
        add.Description = Description;

        const updatedAdd = await add.save();
        res.json(updatedAdd);
    }
    else{
        throw new Error("Addvertisement Not Found");
    }

})

module.exports = {getAdds, createAdds, getAddById, updateAdd}