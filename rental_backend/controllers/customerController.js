const asyncHandler = require('express-async-handler');

const User = require('../Models/customer.js');
const generateToken = require('../Utils/generateToken.js');

const registerUser = asyncHandler(async(req, res) => {
    const { Name, NIC, Email, Password, Phone, Address, pic, UserType, BusinessType} = req.body;

    const customerExists = await User.findOne({Email});

    if(customerExists){
        res.status(400);
        throw new Error("Already Exists");
    }
    const user  = await User.create({
        Name,
        NIC,
        Email,
        Password,
        Phone,
        Address,
        pic,
        UserType,
        BusinessType
    });

    if (user){
        res.status(201).json({
           _id:user._id,
           Name:user.Name,
           NIC:user.NIC,
           Email:user.Email,
           Phone:user.Phone,
           Address:user.Address,
           pic:user.pic, 
           UserType:user.UserType,
           BusinessType:user.BusinessType,
           token:generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error ("Error Occured");
    }

    
    
    });

    const loginUser = asyncHandler(async(req, res) => {
    const {Email, Password} = req.body;
    
    const user = await User.findOne({ Email });

    if(user && (await user.matchPassword(Password))){
        res.json({
            _id:user._id,
            Name:user.Name,
            NIC:user.NIC,
            Email:user.Email,
            Phone:user.Phone,
            Address:user.Address,
            pic:user.pic, 
            UserType:user.UserType,
            BusinessType:user.BusinessType,
            token:generateToken(user._id)
        });
    }

    else{
        res.status(400);
        throw new Error("Invalid Email or Password");
    }
    });


    const updateUserProfile = asyncHandler(async (req,res) => { 
        //get the logged users id

        const user = await User.findById(req.user._id);

        if(user) {
            user.Name = req.body.Name || user.Name;
            user.Email = req.body.Email || user.Email;
            user.pic = req.body.pic || user.pic;
            user.Address = req.body.Address || user.Address;
            user.Phone = req.body.Phone || user.Phone;

            if(req.body.Password) {
                user.Password = req.body.Password;
            }

        const updatedUser = await user.save();

        res.json({
            _id:updatedUser._id,
            Name:updatedUser.Name,
            Email:updatedUser.Email,
            pic:updatedUser.pic,
            token: generateToken(updatedUser._id),
            Address:updatedUser.Address,
            Phone:updatedUser.Phone,
        });
     }
     else{
         res.status(404)
         throw new Error("User Not Found");
     }
     });



    const getCustomers = asyncHandler(
        async(req,res) => {
            const customer = await User.find({UserType :"customer"})
            
            res.json(customer)
        
        }
    )

    const removeCustomer = asyncHandler( 
        async(req,res) =>{
            //find the id whther exists or not
            const customer = await User.findById(req.params.id);

            if(customer){
                await customer.remove();
                res.json({ message: "Customer Removed"})
            }
            else{
                res.json(404)
                throw new Error("Customer Not Found")
            }
        }
    )
 
module.exports = {registerUser, loginUser, getCustomers, removeCustomer, updateUserProfile};