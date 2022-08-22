import React from "react";
import Header2 from "../components/layout/Header2";
import Category from "../components/layout/Category";
import Brand from "../components/layout/Brand";
import Products from "../components/layout/Products";
import StoreBlog from "../components/layout/StoreBlog";
import Banner from "../components/layout/Banner";

export default function HomePage() {
  return (
    <>
      <Header2 />
      <Category />
      <Brand />
      <Products />
      <StoreBlog />
      <Banner />
    </>
  );
}
