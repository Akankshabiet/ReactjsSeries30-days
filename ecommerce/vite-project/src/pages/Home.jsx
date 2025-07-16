import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import BrandCard from "../components/BrandCard";

const products = [
  { name: "Galaxy M13", image: "/imgs/w.jpg", price: "₹10,499" },
  { name: "Galaxy M12", image: "/imgs/1.jpg", price: "₹9,999" },
  { name: "Galaxy M32", image: "/imgs/3.jpg", price: "₹12,999" },
  { name: "Galaxy M52", image: "/imgs/5.jpg", price: "₹17,499" },
];

const categories = [
  { name: "Smartphones", image: "/imgs/1.jpg" },
  { name: "Laptops", image: "/imgs/lap.jpg" },
  { name: "Watches", image: "/imgs/w.jpg" },
  { name: "Cameras", image: "/imgs/pro.jpg" },
];

const brands = [
  { name: "Apple", logo: "/imgs/8.jpg", offer: "UP TO 80% OFF", color: "#000" },
  { name: "Samsung", logo: "/imgs/pro.jpg", offer: "UP TO 50% OFF", color: "#f8f9fa" },
  { name: "OnePlus", logo: "/imgs/6.jpg", offer: "UP TO 60% OFF", color: "#ed1c24" },
  { name: "Realme", logo: "/imgs/w.jpg", offer: "UP TO 40% OFF", color: "#ffcc00" },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />

      <section className="section">
        <h2>Grab the Best Deal on Smartphones</h2>
        <div className="grid">
          {products.map((p, index) => (
            <ProductCard key={index} product={p} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Shop From Top Categories</h2>
        <div className="grid">
          {categories.map((c, index) => (
            <CategoryCard key={index} category={c} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Top Electronics Brands</h2>
        <div className="grid">
          {brands.map((b, index) => (
            <BrandCard key={index} brand={b} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
