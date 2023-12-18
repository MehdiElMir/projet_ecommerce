import logo from './logo.svg';
import './App.css';
import {  ProductNew } from './compenents/admin/compenent.product.new';
import { ProductList } from './compenents/admin/compenent.product.list';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from './compenents/admin/component.admin.layout';
import { ProductEdit } from './compenents/admin/component.product.edit';
import { SignUp } from './compenents/admin/component.signup';
import { Home } from './compenents/client/component.home';
import { ClientLayout } from './compenents/client/component.client.layout';
function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout/>}>
         <Route path='products' element={<ProductList/>}/>
         <Route path='products/new' element={<ProductNew/>}/>
         <Route path='products/edit/:id' element={<ProductEdit/>}/>
         <Route path='signup' element={<SignUp/>}/>

      </Route>
      <Route path='/' element={<ClientLayout/>}>
           <Route path='' element={<Home/>}/>
      </Route>
      
    </Routes>
     

  );
}

export default App;
