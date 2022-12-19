import {Route,Routes} from "react-router-dom";
import Cart from "../Pages/Cart";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductCart from "../Pages/ProductCart";
import Products from "../Pages/Products";
import Signup from "../Pages/Signup";
function AllRoutes(){
return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/data/:id" element={<Details/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
)
}
export default AllRoutes;