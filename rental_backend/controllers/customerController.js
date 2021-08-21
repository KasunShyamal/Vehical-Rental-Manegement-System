const asyncHandler = require('express-async-handler');
const Customer = require('../Models/customer.js');

const registerCustomer = asyncHandler(async(req, res) => {
    const { Name, NIC, Email, Password, Phone, Address, pic} = req.body;

    const customerExists = await Customer.findOne({Email});

    if(customerExists){
        res.status(400);
        throw new Error("Customer Already Exists");
    }

    const customer  = await Customer.create({
        Name,
        NIC,
        Email,
        Password,
        Phone,
        Address,
        pic
    });

    if (customer){
        res.status(201).json({
           _id:customer._id,
           Name:customer.Name,
           NIC:customer.NIC,
           Phone:customer.Phone,
           Address:customer.Address,
           pic:customer.pic, 
           isAdmin:customer.isAdmin,
           isPartner:customer.isPartner
        });
    }
    else{
        res.status(400);
        throw new Error ("Error Occured");
    }


    
    });


module.exports = {registerCustomer};