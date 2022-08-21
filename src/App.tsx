import React, { useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authen from "./pages/Authen";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Authen />} />
          <Route path="/products" element={<ProductsList />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>

    // <Authen></Authen>
    // <HomePage></HomePage>
    // <ProductsList></ProductsList>
  );
}
export default App;
