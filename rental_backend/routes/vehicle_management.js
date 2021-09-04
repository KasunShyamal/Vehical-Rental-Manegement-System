const router = require("express").Router();
const Vehicle = require("../models/Vehicle");

/*Router for get all Vehicles*/
router.get("/", async (req, res) => {

    await Vehicle.find()
        .then(vehicle => res.send(vehicle))
        .catch(err => res.status(400).send('Error: ' + err))

});

/*Router for get Vehicle by Id*/
router.get("/:id", async (req, res) => {

    await Vehicle.findById(req.params.id)
        .then((vehicle) => res.send(vehicle))
        .catch(err => res.status(400).send("Error : " + err))

});

/*Router for create vehicle*/
router.post('/AddVehicle', async (req, res) => {

    const vehicleNumber = req.body.vehicleNumber;

    let vehicleExist = await Vehicle.findOne({
        vehicleNumber: vehicleNumber,
    });

    if (vehicleExist)
        return res.status(404).send("vehicle already created!");

    let image = req.files.photo;

    let urlPrefix = "http://localhost:8092/static/images";
    let imageName = Date.now() + "-" + image.name;

    image.mv("./public/images/Vehicles/" + imageName, (err, result) => {
        if (err) return res.status(400).send("Error : " + err);
    });

    let imageURL = urlPrefix + "/Vehicles/" + imageName;

    let vehicle = new Vehicle({
        brand: req.body.brand,
        vehicleNumber: vehicleNumber,
        price: req.body.price,
        category: req.body.category,
        milages: req.body.milages,
        sheetCount: req.body.sheetCount,
        condition: req.body.condition,
        description: req.body.description,
        createdBy: req.body.createdBy,
        imageURL
    });

    try {
        await vehicle.save();
        res.send(vehicle);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error: ' + err);
    }

});

/*Router for delete vehicle*/
router.delete("/DeleteVehicle/:id", async (req, res) => {

    await Vehicle.findByIdAndDelete(req.params.id)
        .then(() => res.send("Vehicle Deleted Successfully!"))
        .catch(err => res.status(400).send("Error : " + err));

});

/*Router for update vehicle*/
router.put("/UpdateVehicle/:id", async (req, res) => {

    console.log(req.body);

    let imageURL;
    if (req.body.isImageUpdated === "true") {

        let image = req.files.photo;

        let urlPrefix = "http://localhost:8092/static/images";
        let imageName = Date.now() + "-" + image.name;

        image.mv("./public/images/Vehicles/" + imageName, (err, result) => {
            if (err) return res.status(400).send("Error : " + err);
        });

        imageURL = urlPrefix + "/Vehicles/" + imageName;
    }

    await Vehicle.findById(req.params.id)
        .then(vehicle => {
            vehicle.brand = req.body.brand;
            vehicle.vehicleNumber = req.body.vehicleNumber;
            vehicle.price = req.body.price;
            vehicle.category = req.body.category;
            vehicle.milages = req.body.milages;
            vehicle.sheetCount = req.body.sheetCount;
            vehicle.condition = req.body.condition;
            vehicle.description = req.body.description;
            if (req.body.isImageUpdated === "true") {
                vehicle.imageURL = imageURL;
            }

            vehicle.save()
                .then(() => res.send("Vehicle Updated Successfully!"))
                .catch(err => res.status(400).send('Error: ' + err));
        })
        .catch(err => res.status(400).send("Error : " + err));

});


module.exports = router;