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
    
    const user = await User.findOne({Email});

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

 
module.exports = {registerUser, loginUser};