import React from "react";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authen from "./pages/Authen";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/ProductsList";
function App() {
  return (
    // <MainLayout>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/login" element={<Login />}>

    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </MainLayout>

    // <Authen></Authen>
    // <HomePage></HomePage>
    <ProductsList></ProductsList>
  );
}
export default App;
