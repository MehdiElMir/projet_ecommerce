import { NavLink, Outlet } from "react-router-dom";


export function ClientLayout (){
    return(
        <>
          <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <NavLink className={"nav-link text-primary"} >Accueil</NavLink>
                     </li>
                     <li>
                         <NavLink className={"nav-link text-primary"}  to={"/products"}>Produits</NavLink>
                     </li>
                     <li>
                         <NavLink className={"nav-link text-primary"} >Catégories</NavLink>
                     </li>
                     <li>
                        <NavLink className={"nav-link text-primary"} >Contact</NavLink>
                     </li>
                     <li>
                        <NavLink to={"/signup"} className={"nav-link text-primary"} >Connexion</NavLink>
                     </li>
                     
                 </ul>
               </div>
           </nav>
          </header>
           <main>
           <div className="container mt-3">
               <Outlet/>
           </div>
           </main>
           <footer>
               mudniapolis@copyright
           </footer>
        </>
    )
    
}