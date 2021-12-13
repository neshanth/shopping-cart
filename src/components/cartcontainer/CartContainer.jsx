import React from "react";
import { useGloablContext } from "../../context/context";
import Cart from "../cart/Cart";
import "./cartcontainer.css";
import { Link } from "react-router-dom";

export default function CartContainer() {
  const { cart } = useGloablContext();
  return (
    <div className="container cart-container">
      {cart.length > 0 ? (
        <Cart />
      ) : (
        <>
          <h2 className="empty-text">Your Shopping Cart Is Empty</h2>
        </>
      )}
    </div>
  );
}
