import "./App.css";
import react from "react";
import products from "./products";
import ProductItem from "./components/ProductItem";
import happysweets from "./css/happysweets.css";

const productsList = products.map((product) => {
  <div>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>Price: {product.price}</p>
  </div>;
  return <div>{productsList}</div>;
});
function App() {
  return (
    <div className="sweets-container">
      <ProductItem />
    </div>
  );
}

export default App;
