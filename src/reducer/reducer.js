import { productsData } from "../data/products";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.some((c) => c.id === action.payload)) {
        const currentCart = state.cart.filter((c) => c.id === action.payload);
        currentCart[0].Qty++;
        const alreadyExistingCart = state.cart.filter(
          (c) => c.id !== action.payload
        );
        return { ...state, cart: [...alreadyExistingCart, ...currentCart] };
      } else {
        const updatedCart = productsData.filter((c) => c.id === action.payload);
        return {
          ...state,
          cart: [...state.cart, ...updatedCart],
        };
      }

    case "INC_QTY":
      let incrementedCart = state.cart.map((c) => {
        if (c.id === action.payload) {
          return { ...c, Qty: c.Qty + 1 };
        }
        return c;
      });
      return {
        ...state,
        cart: incrementedCart,
      };

    case "DEC_QTY":
      let decrementedCart = state.cart
        .map((c) => {
          if (c.id === action.payload) {
            return { ...c, Qty: c.Qty - 1 };
          }
          return c;
        })
        .filter((c) => c.Qty > 0);
      return {
        ...state,
        cart: decrementedCart,
      };

    case "GET_TOTALS":
      let finalTotal = state.cart.reduce(
        (cartTotal, current) => {
          cartTotal.total += current.Qty * current.price;
          return cartTotal;
        },
        { total: 0 }
      );

      return { ...state, total: finalTotal.total.toFixed(2) };

    case "DELETE_ITEM":
      let cartItems = state.cart.filter((cart) => cart.id !== action.payload);
      return { ...state, cart: [...cartItems] };

    case "SEARCH_PRODUCTS":
      if (state.query) {
        const filteredProducts = productsData.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(state.query.toLowerCase());
        });

        return { ...state, products: [...filteredProducts] };
      } else {
        return { ...state, products: [...productsData] };
      }

    case "CHANGE_QUERY":
      let queryText = action.payload;
      return { ...state, query: queryText };

    default:
      return state;
  }
};

export { reducer };
