import http from "./http-common";
const token = localStorage.getItem("jwtToken");
export async function getProducts(query) {
  return await http.get(`/products?keyWord=${query}`, {
    headers: { Authorization: token },
  });
}
export async function getProductById(id) {
  return await http.get(`/products/${id}`, {
    headers: { Authorization: token },
  });
}
export async function deleteProductByID(id) {
  return await http.delete(`/products/${id}`, {
    headers: { Authorization: token },
  });
}
export async function addProduct(product) {
  return await http.post("/products", product, {
    headers: { "Content-Type": "multipart/form-data", Authorization: token },
  });
}
export async function updateProduct(product) {
  return await http.patch(`/products/${product._id}`, product, {
    headers: { Authorization: token },
  });
}
