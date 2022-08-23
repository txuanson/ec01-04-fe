import React from "react";
import Header2 from "../components/layout/Header2";
import Navigation from "../components/layout/Navigation";
import OrderCheckout from "../components/layout/OrderCheckout";
import Suggestion from "../components/layout/Suggestion";

export default function CheckoutDetail() {
  return (
    <>
      <Header2 />
      <Navigation />

      <OrderCheckout />
      <Suggestion />
    </>
  );
}
