const express = require("express"); // requiring expresss
const router = express.Router(); // router
const homeController = require("../controllers/homeController"); // requeiring homeController

console.log(`router is loaded : {200}`);

// It will redirect you to the home page
router.get("/", homeController.home);

router.use("/users", require("./employees"));

router.use("/admin", require("./admin"));

router.use("/reviews", require("./reviews"));

module.exports = router;
