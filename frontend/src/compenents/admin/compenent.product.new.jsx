import { useEffect, useState } from "react";
import { addProduct } from "../../services/product.services";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../services/categorie.services";
export function ProductNew(){
    const [name,setName] =useState("");
    const [price,setPrice] =useState(0);
    const [selectedCat,setSelectedCat] =useState(0);
    const [categories,setCategories]=useState([]);
    const [productImage,setProductImage]=useState(null);

    const navigate=useNavigate();
    useEffect(()=>{
        fetchCategories()
       }
    ,[]);
    async function fetchCategories(){
        const res=await getAllCategories();
        setCategories(res.data);
    }
    async function handlForm(event){
        event.preventDefault();
        const formData=new FormData();
        const p={"name":name,"price":price,"category":categories[selectedCat]};
        formData.append("productData",JSON.stringify(p))
        formData.append("productImage",productImage)
        
        await addProduct(formData);
        navigate("/admin/products");
       }
    return (
        <form onSubmit={(e)=>handlForm(e)}>
        <label className="form-label" htmlFor='name'>Nom : </label>
        <input className="form-control" type='text' id="name" onChange={(e)=>setName(e.target.value)}/>
    
        <label className="form-label" htmlFor='price'>Prix :</label>
        <input className="form-control" type='number' id="price" onChange={(e)=>setPrice(e.target.value)}/>
        <label className="form-label" htmlFor='price'>Catégorie :</label>
         <select className="form-control" onChange={(e)=>setSelectedCat(e.target.value)}>
            {categories.map((cat,index)=><option key={index} value={index}>{cat.name}</option>)}
         </select>
         <label className="form-label" htmlFor='price'>Image :</label>
         <input className="form-control" type="file" onChange={e=>setProductImage(e.target.files[0])}/>
        <input className="btn btn-primary m-2" type='submit' value={"Enregistrer"}/>
        <input className="btn btn-danger" type='reset' value={"Annuler"}/>
    </form>
    );
}