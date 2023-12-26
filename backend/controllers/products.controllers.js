const catlogServices = require("../services/calatlog.services");
const loginMiddleware = require("../middlewares/login.middleware");
async function getAllProducts(req, res) {
  try {
    let products = [];
    if (req.query.keyWord) {
      products = await catlogServices.findProductsByQuery(req.query.keyWord);
    } else {
      products = await catlogServices.findProducts();
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}

async function getProductById(req, res) {
  const idP = req.params.id;
  try {
    const product = await catlogServices.findProductById(idP);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send("erreur dans le serveur");
  }
}

async function addProduct(req, res) {
  try {
    console.log(req.file);
    console.log(req.body);
    const p = JSON.parse(req.body.productData);
    p.image = "/uploads/" + req.file.filename;
    const product = await catlogServices.saveProduct(p);
    res.status(201).json("");
  } catch (error) {
    res.status(500).send("erreur d'ajout");
  }
}
async function deleteProductById(req, res) {
  const idP = req.params.id;
  try {
    const product = await catlogServices.removeProductById(idP);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
async function updateProduct(req, res) {
  const idP = req.params.id;
  try {
    const product = await catlogServices.updateProduct(idP, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProduct,
};
