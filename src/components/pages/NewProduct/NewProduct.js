import React from "react";
import "./NewProduct.css";

function NewProduct() {
  return (
    <div className="newProduct">
      <h1>New Product</h1>
      <form className="productForm">
        <div className="productFormLeft">
          <label>Image</label>
          <input type="file" className="image" />
          <label>Product Name</label>
          <input type="text" placeholder="Apple AirPods" />
          <label>Stock</label>
          <input type="text" placeholder="1244" />
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="productButton">Update</button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
