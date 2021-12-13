import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useGloablContext } from "../../context/context";

function Card({ title, price, id, image }) {
  const { addToCart } = useGloablContext();
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img src={image} className="product-image" alt={title} />
      </Link>

      <div className="product-info">
        <div className="product-price">
          <p>${price}</p>
        </div>
        <div className="product-title">
          <h4>
            <Link to={`/product/${id}`}>{title}</Link>
          </h4>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => addToCart(id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
