const loginController=require("../controllers/login.controllers");
const express=require("express");
const router=express.Router();

router.route("/").post(loginController.addUser);

module.exports=router;
