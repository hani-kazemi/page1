import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);

  const GetProducts = async () => {
    return await axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };

  useEffect(() => {
    GetProducts();
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((i) => (
        <p key={i.id} className="text-bold text-black">
          {" "}
          id: {i.id}
        </p>
      ))}
    </div>
  );
}