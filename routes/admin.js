// requring express
const express = require("express");
// making router
const router = express.Router();
// requiring passport
const passport = require("passport");

const adminController = require("../controllers/adminController");

router.get(
  "/assignWork",
  passport.checkAuthentication,
  adminController.assignWork
);

router.get(
  "/view-employee",
  passport.checkAuthentication,
  adminController.showEmployeeList
);

router.post(
  "/setReviewes",
  passport.checkAuthentication,
  adminController.setReviewrAndReviewe
);

router.post(
  "/newAdmin",
  passport.checkAuthentication,
  adminController.newAdmin
);

router.get(
  "/deleteEmployee/:id",
  passport.checkAuthentication,
  adminController.deleteEmployee
);

router.get(
  "/add-employee",
  passport.checkAuthentication,
  adminController.addEmployee
);

module.exports = router;
