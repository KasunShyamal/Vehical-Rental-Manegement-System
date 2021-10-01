const express = require("express");
const { getAdds , createAdds, getAddById, updateAdd } = require("../controllers/addController");
const { protect } = require("../middleware/authMidlleware");
const { route } = require("./customerRoutes");

const router = express.Router();

//route to get advertisement
router.route('/').get(protect, getAdds);
//creat advertisements
router.route('/create').post(protect, createAdds);
//update advertisements
router.route('/:id').get(getAddById).put(protect, updateAdd);

module.exports = router;