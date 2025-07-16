const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} />
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
