import React from "react";
import Header2 from "../components/layout/Header2";
import Navigation from "../components/layout/Navigation";
import CartDetail from "../components/layout/CartDetail";
import Suggestion from "../components/layout/Suggestion";

export default function ShoppingCart() {
  return (
    <>
      <Header2 />
      <Navigation />

      <CartDetail />
      <Suggestion />
    </>
  );
}
