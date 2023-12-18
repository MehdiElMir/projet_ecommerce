const Product=require("../models/Product");
const Category=require("../models/Category");

async function findProducts(){
      return await Product.find().populate("category");
}


async function findProductsByQuery(query){
   return await Product.find({name:{$regex:query,$options:"i"}}).populate("category");
}

 async function findProductById(idP){
       return await Product.findById(idP);   
}

async function  saveProduct (p){
   return await Product.create(p);   
}
async function removeProductById(idP){
      return await Product.findByIdAndDelete(idP);
}
async function updateProduct(idP,p){
   return  Product.findByIdAndUpdate(idP,p);
}

async function findCategories(){
   return categories=await Category.find();
}
async function saveCategory(req,res){
        return Category.create(req.body);
}

module.exports={findProducts,
               findProductById,
                saveProduct,
               removeProductById,
               updateProduct,
            findCategories,
        saveCategory,
        findProductsByQuery};