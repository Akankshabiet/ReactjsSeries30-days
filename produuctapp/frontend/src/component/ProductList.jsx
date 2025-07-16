import React from "react";

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p style={{ textAlign: "center" }}>No products available.</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2 style={{ textAlign: "center" }}>Product List</h2>
      {products.map((product, index) => (
        <div key={index} style={{ 
          border: "1px solid #ccc",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "12px",
          background: "#fff"
        }}>
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      ))}
    </div>
  );
}
