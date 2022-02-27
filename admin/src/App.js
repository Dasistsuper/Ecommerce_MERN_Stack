import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {

  const {currentUser: user } = useSelector((state) => state.user)
  return (
    <BrowserRouter>
      <>
      {user && <Topbar />}                                
      <div className="container">
        {user && <Sidebar />}
      <Routes>
      { !user ? ( 
      <Route exact path="/login" element={<Login />}/>):
      <Route path="/login" element={<Navigate to="/" />}/>}
      

    { user ? ( 
      <>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/users" element={<UserList />}/>
          <Route exact path="/user/:userId" element={<User />}/>
          <Route exact path="/newUser" element={<NewUser />}/>
          <Route exact path="/products" element={<ProductList />}/>
          <Route exact path="/product/:productId" element={<Product />}/>
          <Route exact path="/newproduct" element={<NewProduct />}/>
      </>) :
    <Route path="*" element={<Navigate to="/login"/>}/>}
      </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
