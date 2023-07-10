const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
router.post("/user-form", userController.addUserData);
router.post("/search-city", userController.searchCity);
router.post("/search-blood-group", userController.searchBloodGroup);
module.exports = router;
