const express = require("express");
const { registerUser, loginUser, getCustomers, removeCustomer, updateUserProfile } = require("../controllers/customerController.js");
const { protect } = require("../middleware/authMidlleware.js");

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').post(protect,updateUserProfile)

router.route('/getCustomer').get(getCustomers);
router.route('/delCus/:id').delete(removeCustomer);

module.exports = router;