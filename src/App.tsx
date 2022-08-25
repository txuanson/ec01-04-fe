import React, { useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authen from "./pages/Authen";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import CheckoutDetail from "./pages/CheckoutDetail";
import AboutUs from "./pages/AboutUs";
import Policy from "./pages/Policy";
import UserAccount from "./pages/UserAccount";

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Authen />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout-detail" element={<CheckoutDetail />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}
export default App;
