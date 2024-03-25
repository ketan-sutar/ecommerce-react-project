import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";

import React from "react";

import { CartState } from "../context/Context";


const Cards = ({ product }) => {
  const { id, name, price, currency, delivery, thumbnail, inStock } = product;

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  console.log(cart);
  return (
    <div>
      <CCard
        style={{
          width: "20rem",
          height: "100%",
          padding: "1vw",
          border: "2px solid #ccc",
        }}
      >
        <CCardImage orientation="top" src={thumbnail} />
        <CCardBody>
          <CCardTitle>{name}</CCardTitle>

          <CListGroup flush>
            <CListGroupItem>
              {price} - {currency}
            </CListGroupItem>
            <CListGroupItem>
              {inStock ? "In Stock" : "Out of Stock"}
            </CListGroupItem>
            <CListGroupItem>
              {delivery ? "Free Delivery" : "Delivery Charges Apply"}
            </CListGroupItem>
          </CListGroup>

          {cart.some((p) => p.id === product.id) ? (
            <CButton
              className="text-base rounded-md font-semibold p-2 bg-blue-700 text-cyan-50 hover:bg-blue-300 text-black"
              color="secondary"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from cart
            </CButton>
          ) : (
            <CButton
              disabled={!product.inStock}
              className="text-base rounded-md font-semibold p-2 bg-blue-700 text-cyan-50 hover:bg-blue-300 text-black"
              color="secondary"
              onClick={handleAddToCart}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </CButton>
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Cards;
