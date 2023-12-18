const express=require("express");
const productController=require("../controllers/products.controllers")
const router=express.Router();
const multer=require("multer");

const storage=multer.diskStorage({
       destination:(req,file,cb)=>{
              cb(null,"C:/projets_nodejs/2023/projet_ecommerce/backend/uploads");
       },
       filename:(req,file,cb)=>{
              cb(null,file.originalname);
       }
});

const upload = multer({ storage: storage });
router.route("/").get(productController.getAllProducts)
.post(upload.single("productImage"),productController.addProduct);
router.route("/:id").get(productController.getProductById)
       .delete(productController.deleteProductById)
       .patch(productController.updateProduct)

module.exports=router