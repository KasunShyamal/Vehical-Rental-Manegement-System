const express = require("express");
const { registerCustomer } = require("../controllers/customerController.js");

const router = express.Router();

router.route('/').post(registerCustomer);


module.exports = router;