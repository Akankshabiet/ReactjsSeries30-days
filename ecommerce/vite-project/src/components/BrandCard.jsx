const BrandCard = ({ brand }) => {
  return (
    <div className="brand-card" style={{ backgroundColor: brand.color }}>
      <img src={brand.logo} alt={brand.name} />
      <p>{brand.name}</p>
      <small>{brand.offer}</small>
    </div>
  );
};

export default BrandCard;
