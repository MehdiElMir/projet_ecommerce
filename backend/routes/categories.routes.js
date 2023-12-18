const categoryController=require("../controllers/categorys.controllers");
const express=require("express");
const router=express.Router();

router.route("/").get(categoryController.getAllCategories)
.post(categoryController.addCategory);

module.exports=router;
