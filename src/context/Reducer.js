export const cartReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CART":
      return { ...state, cart: action.payload };


    case "ADD_TO_CART":
      const updatecart=[...state.cart,action.payload];
      localStorage.setItem("cart",JSON.stringify(updatecart));

      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }],updatecart };
    
      case "REMOVE_FROM_CART":
      const removecart=state.cart.filter(
        (product)=>product.id!==action.payload.id
      );
      localStorage.setItem("cart",JSON.stringify(removecart))
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),removecart,
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    default:
      return state;
  }
};
