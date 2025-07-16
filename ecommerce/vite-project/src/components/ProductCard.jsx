const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
