import React from "react";
import Header from "./component/Header";
import ProductForm from "./component/ProductForm";
import ProductList from "./component/ProductList";


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  Outlet } from "react-router";
function App() {

  return (
    <div>
       <BrowserRouter>
    <Header />
    <Routes>
    <Route path="ProductForm" element={<ProductForm />} />
    <Route path="ProductList" element={<ProductList />} />
    
    
  </Routes>
    </BrowserRouter>
    <Outlet/>
     </div>
  )
}

export default App
/*export default function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <Header />
      <ProductForm onSubmitProduct={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
}



/*function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-2xl font-bold p-4">Product App</h1>
      <ProductForm />
    </div>
  );
}

export default App;*/
