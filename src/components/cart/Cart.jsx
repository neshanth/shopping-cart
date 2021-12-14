import React from "react";
import { useGloablContext } from "../../context/context";
import "./cart.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function Cart() {
  const { cart, incQty, decQty, total, deleteItem } = useGloablContext();
  return (
    <div>
      {cart.map((c) => {
        return (
          <div className="cart-content" key={c.id}>
            <img src={c.image} alt={c.tile} />
            <div className="cart-product-info">
              <p className="cart-product-title">{c.title}</p>
              <p className="money">&#8377;{c.price.toLocaleString("en-IN")}</p>
            </div>

            <div className="qty-buttons">
              <AiFillMinusCircle
                className="icon"
                size={25}
                onClick={() => decQty(c.id)}
              />
              <p className="qty">{c.Qty}</p>

              <AiFillPlusCircle
                size={25}
                className="icon"
                onClick={() => incQty(c.id)}
              />
            </div>

            <BsTrash
              size={20}
              className="btn-danger"
              onClick={() => deleteItem(c.id)}
            />
          </div>
        );
      })}

      <hr className="divider" />

      <div className="total">
        <p>
          <span className="total-text">TOTAL : </span>
          &#8377;{total}
        </p>
      </div>
    </div>
  );
}

export default Cart;
