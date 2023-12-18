import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, getProductById, updateProduct } from "../../services/product.services";

export function ProductEdit(){
    const [name,setName] =useState("");
    const [price,setPrice] =useState(0);
    const navigate=useNavigate();
    const {id} =useParams();
    useEffect( ()=>{
        fetchProduct();
    },[]);
    async function fetchProduct(){
        const resp=await getProductById(id);
       const p=resp.data;
        setName(p.name);
        setPrice(p.price); 
    }
        async function handlForm(event){
        event.preventDefault();
        const p={"_id":id,"name":name,"price":price}
        await updateProduct(p);
        navigate("/admin/products");
       }
    return (
        <form onSubmit={(e)=>handlForm(e)}>
        <label className="form-label" htmlFor='name'>Nom : </label>
        <input className="form-control" type='text' id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    
        <label className="form-label" htmlFor='price'>Prix :</label>
        <input className="form-control" type='number' id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        
        <input className="btn btn-primary m-2" type='submit' value={"Enregistrer"}/>
        <input className="btn btn-danger" type='reset' value={"Annuler"}/>
    </form>
    );
}