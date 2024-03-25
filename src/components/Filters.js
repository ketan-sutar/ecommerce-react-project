import React from "react";
// import { Form } from "react-router-dom";
import {  RadioGroup, Radio } from "rsuite";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productDispatch,
    productState: { sort },
  } = CartState();
  return (
    <>
      <RadioGroup className="ml-5 flex flex-row font-semibold text-[1vw]">
        <Radio
          value="A"
          className="w-[10vw]"
          onChange={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
          checked={sort === "lowToHigh" ? true : false}
        >
          Low to High
        </Radio>
        <Radio
          value="B"
          className="w-[10vw]"
          onChange={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            });
          }}
          checked={sort === "highToLow" ? true : false}
        >
          High to Low
        </Radio>
      </RadioGroup>
      
    </>
  );
};

export default Filters;
