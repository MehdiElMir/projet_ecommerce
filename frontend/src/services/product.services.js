import http from "./http-common";

export async function getProducts(query){
   return await http.get(`/products?keyWord=${query}`);
}
export async function getProductById(id){
   return await http.get(`/products/${id}`);
}
export async function deleteProductByID(id){
   return  await http.delete(`/products/${id}`);
}
export async function addProduct(product){
    return await http.post("/products",product,
    {headers:{"Content-Type":"multipart/form-data"}});
}
export async function updateProduct(product){
   return await http.patch(`/products/${product._id}`,product);
}
