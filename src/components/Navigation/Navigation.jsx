import React from "react";
import { useGloablContext } from "../../context/context";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const { count } = useGloablContext();

  return (
    <>
      <div className="navigation">
        <Link to="/">Logo</Link>

        <ul className="navigation-container">
          <li className="menu-item">
            <Link to="/cart">Cart</Link>
            <span>{count}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
