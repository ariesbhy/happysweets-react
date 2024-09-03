import "./App.css";
import react from "react";
import products from "./products";

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
    <div>
      <h1>Happy Sweets</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_M3cLR1EDEcRloIkfTB1M5Pl11n6PbubUQ&s"
        alt="happy sweets logo"
      />
      <p>Made with Love...</p>
    </div>
  );
}

export default App;
