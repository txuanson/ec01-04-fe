import React from "react";
import Header2 from "../components/layout/Header2";
import Navigation from "../components/layout/Navigation";
import Footer2 from "../components/layout/Footer2";
import ListDesc from "../components/layout/ListDesc";
import ListSort from "../components/layout/ListSort";
import ListResult from "../components/layout/ListResult";
import Pagination from "../components/layout/Pagination";

export default function HomePage() {
  return (
    <>
      <Header2 />
      <Navigation />

      <ListDesc />
      <ListSort />
      <ListResult />
      <Pagination />
    </>
  );
}
