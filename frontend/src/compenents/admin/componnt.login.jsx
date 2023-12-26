import { useEffect, useState } from "react";
import { userLogin } from "../../services/login.services";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../services/product.services";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);
  async function handleForm(e) {
    e.preventDefault();
    const rep = await userLogin({ email: email, password: password });
    const token = rep.data;
    localStorage.setItem("jwtToken", token);
    console.log(token);
    navigate("admin/products");
  }

  return (
    <form className="container" onSubmit={(e) => handleForm(e)}>
      <label className="form-label" htmlFor="email">
        Email :{" "}
      </label>
      <input
        className="form-control"
        type="text"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="form-label" htmlFor="password">
        password :{" "}
      </label>
      <input
        className="form-control"
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" className="btn btn-primary" value={"Se connecter"} />
      <input type="reset" className="btn btn-danger" value={"annuler"} />
    </form>
  );
}
