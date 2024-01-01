const express = require("express");
const productController = require("../controllers/products.controllers");
const router = express.Router();
const loginMiddleware = require("../middlewares/login.middleware");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(
      null,
      "C:/Users/DELL XPS/Desktop/2ACI_Pratique/Dev_web_avance/projet_ecommerce/backend/uploads"
    );
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router
  .route("/")
  .get(loginMiddleware.jwtVerify, productController.getAllProducts)
  .post(upload.single("productImage"), productController.addProduct);
router
  .route("/:id")
  .get(loginMiddleware.jwtVerify, productController.getProductById)
  .delete(loginMiddleware.jwtVerify, productController.deleteProductById)
  .patch(loginMiddleware.jwtVerify, productController.updateProduct);

module.exports = router;
