import React from "react";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
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
    <HomePage></HomePage>
  );
}
export default App;
