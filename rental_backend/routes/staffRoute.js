const { getInfo } = require("../controller/staffController");
const { addInfo } = require("../controller/staffController");
const { getInfoById } = require("../controller/staffController");
const { updateInfo } = require("../controller/staffController");
const { deleteInfo } = require("../controller/staffController");
const router = require("express").Router();


//create
router.route("/add").post(addInfo);
   
//read
router.route("/").get(getInfo);
  
//update
router.route("/update/:id").put(updateInfo);
  
//delete
router.route("/delete/:id").delete(deleteInfo);
   
//get a staff details
router.route("/get/:id").get(getInfoById);
   
module.exports = router;
