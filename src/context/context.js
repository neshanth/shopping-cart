import React, { useContext, useReducer, useState, useEffect } from "react";
import { productsData } from "../data/products";
import { reducer } from "../reducer/reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    cart: [],
    total: 0,
  };

  const [products, setProducts] = useState(productsData);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const incQty = (id) => {
    dispatch({ type: "INC_QTY", payload: id });
  };

  const decQty = (id) => {
    dispatch({ type: "DEC_QTY", payload: id });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  useEffect(() => {
    setCount(state.cart.length);
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const searchProducts = (e) => {
    e.preventDefault();
    if (query) {
      const filteredProducts = productsData.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });

      setProducts([...filteredProducts]);
    } else {
      setProducts([...productsData]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        products,
        addToCart,
        count,
        cart: state.cart,
        incQty,
        decQty,
        total: state.total,
        searchProducts,
        setQuery,
        deleteItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook for context
export const useGloablContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
