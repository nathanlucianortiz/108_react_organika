import React, { Component } from "react";
import QuantityPicker from "../quantityPicker/quantityPicker";

class Product extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src="https://picsum.photos/250/300/" alt="" />
        <label>Description here</label>
        <label>Total</label>
        <label>Price</label>
        <QuantityPicker></QuantityPicker>
        <button>Add</button>
      </div>
    );
  }
}

export default Product;
