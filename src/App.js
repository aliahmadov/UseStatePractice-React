import "./App.css";
import { products } from "./Data";
import { useState } from "react";

let uniqueID = 0;
let nextID = 1;
function App() {
  const [product, setProduct] = useState({
    id: 0,
    prodName: "",
    price: 0,
    description: "",
    imageUrl: "",
  });
  const [productData, setProductData] = useState(products);

  function handleInputChange(event) {
    setProduct((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }

  function addProduct() {
    product.id = ++nextID;
    setProductData([...productData, product]);

    setProduct({
      id: 0,
      prodName: "",
      price: 0,
      description: "",
      imageUrl: "",
    });

  }

  function handleCardClick(product) {
    setProduct(() => ({
      id: product.id,
      prodName: product.prodName,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    }));
  }

  function updateProduct() {
    let index = productData.findIndex((p) => p.id === product.id);
    console.log(productData);
    console.log(product.id);
    console.log(index);
    const updatedProductData = [...productData];
    updatedProductData[index] = product;

    setProductData(updatedProductData);

    setProduct({
      id: 0,
      prodName: "",
      price: 0,
      description: "",
      imageUrl: "",
    });
  }
  return (
    <div style={{ padding: "20px" }}>
      <div>
        {productData.map((p) => (
          <div
            key={uniqueID++}
            className="prodCard"
            onClick={() => handleCardClick(p)}
          >
            <div>
              <img
                style={{ width: "450px", height: "450px" }}
                src={p.imageUrl}
                alt="product"
              ></img>
              <p>{p.description}</p>
              <p style={{ fontWeight: "bold" }}>{p.price}$</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p style={{ fontSize: "60px", fontWeight: "bold" }}>Form</p>
        <div className="form">
          <div className="m5">
            <label className="mR">Name</label>
            <input
              value={product.prodName}
              name="prodName"
              onChange={(e) => handleInputChange(e)}
              className="formInput"
            ></input>
          </div>
          <div className="m5">
            <label className="mR">Price</label>
            <input
              value={product.price}
              name="price"
              onChange={(e) => handleInputChange(e)}
              className="formInput"
              type="number"
            ></input>
          </div>
          <div className="m5">
            <label className="mR">Description</label>
            <input
              value={product.description}
              name="description"
              onChange={(e) => handleInputChange(e)}
              className="formInput"
            ></input>
          </div>

          <div className="m5">
            <label className="mR">Image Url</label>
            <input
              value={product.imageUrl}
              name="imageUrl"
              onChange={(e) => handleInputChange(e)}
              className="formInput"
            ></input>
          </div>

          <div style={{ marginTop: "10px" }}>
            <button className="formBtn green" onClick={addProduct}>
              Add
            </button>
            <button onClick={updateProduct} className="formBtn orange">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
