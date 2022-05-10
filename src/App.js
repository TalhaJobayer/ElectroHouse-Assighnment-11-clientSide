import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import About from './Component/About/About';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';
import Products from './Component/Products/Products';
import Product from './Component/Home/Product/Product';

import SocialLogin from './Component/Shared/SocialLogin/SocialLogin';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import RequireAuth from './Component/Shared/RequireAuth/RequireAuth';
import ProccedToPay from './Component/ProccedToPay/ProccedToPay';
import MyItems from './Component/Admin/MyItems/MyItems';
import AddItems from './Component/Admin/AddItems/AddItems';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/home' element={<Home></Home>}></Route> 
        <Route path='/products' element={<Products></Products>}></Route> 
        <Route path='/product' element={<Product></Product>}></Route> 
       
         {/*invenory=productDetails  */}
         {/*invenory=productDetails  */}
        <Route path='/Inventory/:InventoryID' element={
         <RequireAuth>
                     <ProductDetails></ProductDetails>
                     </RequireAuth>
  
        }></Route>


        
        <Route path='/proccedToPay' element={<ProccedToPay></ProccedToPay>}></Route> 
        <Route path='/MyItems' element={<MyItems></MyItems>}></Route> 
        <Route path='/AddItems' element={<AddItems></AddItems>}></Route> 
        <Route path='/about' element={<About></About>}></Route> 
        <Route path='/logIn' element={<LogIn></LogIn>}></Route> 
        <Route path='/signUp' element={<SignUp></SignUp>}></Route> 
        <Route path='/socialLogin' element={<SocialLogin></SocialLogin>}></Route> 
        <Route path='*' element={<NotFound></NotFound>}></Route> 

       
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
