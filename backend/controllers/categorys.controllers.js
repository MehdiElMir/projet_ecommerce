const catlogServices = require("../services/calatlog.services");

async function getAllCategories(req, res) {
  try {
    const categories = await catlogServices.findCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send("erreur dand le serveur");
  }
}
async function addCategory(req, res) {
  try {
    console.log(req.body);
    const category = await catlogServices.saveCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
module.exports = { getAllCategories, addCategory };
