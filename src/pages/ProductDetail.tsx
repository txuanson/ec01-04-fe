import React from "react";
import Header2 from "../components/layout/Header2";
import Navigation from "../components/layout/Navigation";
import ProductInfo from "../components/layout/ProductInfo";
import Suggestion from "../components/layout/Suggestion";

export default function HomePage() {
  return (
    <>
      <Header2 />
      <Navigation />

      <ProductInfo />
      <Suggestion />
    </>
  );
}
