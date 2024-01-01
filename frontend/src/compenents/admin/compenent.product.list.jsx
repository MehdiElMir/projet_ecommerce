import { useEffect, useState } from "react";
import {
  deleteProductByID,
  getProducts,
} from "../../services/product.services";
import { Link } from "react-router-dom";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [query]);

  async function fetchProducts() {
    const res = await getProducts(query);
    setProducts(res.data);
  }
  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }
  return (
    <>
      <form>
        <input
          className="m-3"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Entrez un mot clé"
        />
      </form>
      <table className="table table-bordered table-striped">
        <thead className="bg-light">
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elem, index) => (
            <tr key={index}>
              <td>{elem.name}</td>
              <td>{elem.price}</td>
              <td>{elem.category.name}</td>
              <td>
                <img
                  height={100}
                  width={100}
                  src={`http://localhost:5000${elem.image}`}
                />
              </td>
              <td>
                <button onClick={() => deleteProduct(elem._id)}>Supp</button>
                <Link to={`/admin/products/edit/${elem._id}`}>Editer</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/admin/products/new"}>Nouveau produit</Link>
    </>
  );
}
