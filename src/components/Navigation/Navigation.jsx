import React from "react";
import { useGloablContext } from "../../context/context";
import "./navigation.css";
import { Link } from "react-router-dom";
import { AiFillThunderbolt } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";

function Navigation() {
  const { count } = useGloablContext();

  return (
    <>
      <div className="navigation container">
        <Link to="/">
          <AiFillThunderbolt size={50} color="#2189ff" />
          <span className="logo-title">Estore</span>
        </Link>

        <ul className="navigation-container">
          <li className="menu-item">
            <Link to="/cart">
              <CgShoppingCart size={25} />
            </Link>
          </li>
          <p className="cart-count">{count}</p>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
