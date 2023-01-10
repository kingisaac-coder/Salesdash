import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import UserList from "./components/pages/UserList/UserList";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import User from "./components/pages/user/User";
import NewUsers from "./components/pages/newPage/NewUsers";
import ProductList from "./components/pages/Productlist/ProductList";
import Products from "./components/pages/products/Products";
import NewProduct from "./components/pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUsers />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/newProducts" element={<NewProduct />} />
          <Route path="/product/:productId" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
