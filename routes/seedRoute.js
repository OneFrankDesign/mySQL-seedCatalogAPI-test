const express = require("express");
const router = express.Router();
const seedController = require("../controllers/seedController");

router
  .route("/")
  .get(seedController.getAllSeeds)
  .post(seedController.createSeed);

// get seeds by category

router.get("/category/:category", seedController.getSeedsByCategory);

router
  .route("/:id")
  .get(seedController.getSeedById)
  .put(seedController.updateSeedById)
  .delete(seedController.deleteSeedById);

module.exports = router;
