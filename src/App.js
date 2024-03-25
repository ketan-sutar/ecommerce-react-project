import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
// import { Button } from "@coreui/coreui";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route>
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
