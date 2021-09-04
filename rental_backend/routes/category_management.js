
const router = require("express").Router();
const Category = require("../models/Category");

/*Router for get all Categories*/
router.get("/", async (req, res) => {

    await Category.find()
        .then(cat => res.send(cat))
        .catch(err => res.status(400).send('Error: ' + err))

});

/*Router for create category*/
router.post('/AddCategory', async (req, res) => {

    const cat = req.body.category

    let categoryExist = await Category.findOne({
        category: cat,
    });

    if (categoryExist)
        return res.status(404).send("Category already created!");

    let category = new Category({
        category: cat,
    });

    try {
        await category.save();
        res.send(category);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }

});
/*Router for delete category*/
router.delete("/DeleteCategory/:id", async (req, res) => {

    await Category.findByIdAndDelete(req.params.id)
        .then(() => res.send("category Deleted Successfully!"))
        .catch(err => res.status(400).send("Error : " + err));

});

module.exports = router;