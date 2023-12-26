const loginController = require("../controllers/login.controllers");
const express = require("express");
const router = express.Router();

router.route("/signup").post(loginController.signup);
router.route("/login").post(loginController.login);

module.exports = router;
