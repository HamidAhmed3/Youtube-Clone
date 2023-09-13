var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);
router.get("/getUserByEmail", userController.getUserByEmail);

module.exports = router;
