const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
router.post("/user-form", userController.addUserData);
module.exports = router;
