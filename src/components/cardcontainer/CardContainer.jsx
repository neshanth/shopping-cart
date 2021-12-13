import React from "react";
import { useGloablContext } from "../../context/context";
import Card from "../card/Card";
import "./cardcontainer.css";

function CardContainer() {
  const { products } = useGloablContext();
  return (
    <div className="container card-container">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default CardContainer;
