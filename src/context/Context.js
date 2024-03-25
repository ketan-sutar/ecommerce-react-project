import React, { createContext, useContext, useReducer } from "react";
import jsdata from "../data/products.json";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
const Context = ({ children }) => {
  const products = jsdata.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      currency: item.currency,
      delivery: item.delivery,
      thumbnail: item.thumbnail,
      inStock: item.inStock,
      categoryId: item.categoryId,
    };
  });

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  // console.log(products);

  const [productState, productDispatch] = useReducer(productReducer, {});
  console.log(productState);

  //   console.log(products);
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
