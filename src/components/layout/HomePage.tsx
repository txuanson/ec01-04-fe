import React from "react";
import Category from "./Category";
import Header2 from "./Header2";
import Brand from "./Brand";
import BestSeller from "./BestSeller";
import Group from "./Group";

export default function HomePage() {
  return (
    <>
      <Header2 />
      <Category />
      <Brand />
      <BestSeller />
      <Group />
    </>
  );
}
