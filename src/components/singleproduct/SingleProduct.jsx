import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productsData } from "../../data/products";
import "./singleproduct.css";
import { useGloablContext } from "../../context/context";
import Loading from "../loading/Loading";

function SingleProduct() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { addToCart } = useGloablContext();
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = productsData.find((p) => p.id === parseInt(id));
    setProduct(getSingleProduct);
    setLoading(false);
  }, [product]);

  if (loading) {
    return (
      <div className="product-container container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="product-container container">
      <div className="image-container">
        <img className="product-img" src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p className="product-price">Rs.{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button
          onClick={() => addToCart(product.id)}
          className="btn btn-primary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
