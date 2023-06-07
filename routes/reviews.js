const express = require("express"); // requiring the express
const router = express.Router(); // routere
// requring the reviewController file
const reviewController = require("../controllers/reviewController");

// setting up the new review
router.get("/newReview/:id", reviewController.newReview);

module.exports = router;
