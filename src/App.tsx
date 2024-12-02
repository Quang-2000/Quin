import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/layout/header.css";
import "./styles/layout/navbar.css";
import "./styles/layout/banner.css";
import "./styles/layout/footerr.css";
import "./styles/cart.css";
import "./styles/checkout.css";
import "./styles/Admin/admin.css";
import "./styles/Admin/customer.css";
import "./styles/Admin/productAdmin.css";
import "./styles/Admin/order.css";
import "./styles/layout/sales-policy.css";
import "./styles/products/productsList.css";
import "./styles/products/productsPage.css";
import "./styles/products/productsDetail.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Signin/Login/LoginPage";
import CartPage from "./pages/Cart/CartPage";
import ProductPage from "./pages/Products/ProductsPage";
import RegisterPage from "./pages/Signin/Register/RegisterPage";
import ProductsList from "./pages/Products/ProductsList";
import ProductDetail from "./pages/Products/ProductDetail";
import SalesPolicy from "./components/layout/SalesPolicy";
import News from "./components/layout/News";
import Contact from "./components/layout/Contact";
import Introduce from "./components/layout/Introduce";
import CheckOut from "./modules/Cart/components/CheckOut";
import AdminPage from "./pages/Admin/AdminPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/productsList" element={<ProductsList />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/salesPolicy" element={<SalesPolicy />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
