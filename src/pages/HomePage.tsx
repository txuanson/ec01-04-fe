import React from "react";
import Header2 from "../components/layout/Header2";
import Navigation from "../components/layout/Navigation";
import Category from "../components/layout/Category";
import Brand from "../components/layout/Brand";
import Products from "../components/layout/Products";
import StoreBlog from "../components/layout/StoreBlog";
import Banner from "../components/layout/Banner";
import Footer2 from "../components/layout/Footer2";

export default function HomePage() {
  return (
    <>
      <Header2 />
      {/* <Navigation /> */}
      <Category />
      <Brand />
      <Products />
      <StoreBlog />
      <Banner />

      {/* <Footer2 /> */}
    </>
  );
}
