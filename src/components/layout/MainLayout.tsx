import React from "react";
import Footer2 from "./Footer2";
import Header2 from "./Header2";
import Hero from "./Hero";

export default function MainLayout({ children }) {
  return (
    <>
      {children}
      <Footer2 />
    </>
  );
}
