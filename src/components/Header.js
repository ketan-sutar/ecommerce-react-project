import React, { useEffect } from "react";

import { CButton, CContainer, CNavbar, CNavbarBrand } from "@coreui/react";
import { CartState } from "../context/Context";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "INITIALIZE_CART", payload: storedCart });
    }
  }, [dispatch]);

  const handleCartClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex items-center   justify-between">
      <CNavbar expand="lg" className="p-5 font-semibold text-[1vw]">
        <div className="flex items-center justify-between  gap-[80vw] px-5">
          <CContainer fluid>
            <div className="flex items-center justify-between">
              <NavLink to="/">
                <CNavbarBrand>E-Commerce App</CNavbarBrand>
              </NavLink>
            </div>
          </CContainer>
          <CContainer>
            <CButton
              onClick={handleCartClick}
              className="text-[1.2vw] bg-slate-300 rounded-md p-2 font-bold mt-8 mb-5 ml-3"
            >
              Cart
              <sup className="font-semibold bg-blue-300 text-cyan-50 p-1 rounded-md">
                {cart.length}
              </sup>
            </CButton>
          </CContainer>
        </div>
      </CNavbar>
    </div>
  );
};

export default Header;
