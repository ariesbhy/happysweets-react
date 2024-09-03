import "./App.css";
import react from "react";
import products from "./products";

function App() {
  return (
    <div>
      <h1>Happy Sweets</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_M3cLR1EDEcRloIkfTB1M5Pl11n6PbubUQ&s"
        alt="happy sweets logo"
      />
      <p>Made with Love...</p>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
