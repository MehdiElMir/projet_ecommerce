import { useState } from "react"
import { addUser } from "../../services/login.services";
import './Signup.css'

export function SignUp(){
     const [fName,setfName]=useState("");
     const [lName,setlName]=useState("");
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");

     async function handleForm(e){
        e.preventDefault();
       const user={"lName":lName,"fName":fName,"email":email,"password":password};
       await addUser(user);
     }
    return (
        <form onSubmit={e=>handleForm(e)}>
            <label className="form-label text-blue">Nom :</label>
            <input className="form-control" type="text" onChange={e=>setlName(e.target.value)}/>
            <label className="form-label">Prénom :</label>
            <input className="form-control" type="text" onChange={e=>setfName(e.target.value)}/>
            <label className="form-label">Email :</label>
            <input className="form-control" type="email" onChange={e=>setEmail(e.target.value)}/>
            <label className="form-label">Mot de passe :</label>
            <input className="form-control" type="password" onChange={e=>setPassword(e.target.value)}/>
          
            <input className="btn btn-primary" type="submit" value="S'inscrire" />
            <input className="btn btn-danger" type="reset" value="Effacer" />
        </form>
    )
}