import { FaLongArrowAltRight } from "react-icons/fa";
import { Footers } from "../components/UI/Footer"; // ✅ Make sure the path is correct

export const Home = () => {
  return (
    <>
      <main className="hero-section container grid grid-two-cols banner-column">
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One <br /> Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Start, search, and
            filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>

        {/* Right Side: Hero Image */}
        <div className="hero-image">
          <img
            src="/imags/world.jpg"
            alt="World is beautiful"
            className="banner-image"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px"
            }}
          />
        </div>
      </main>

      {/* ✅ Footer Section */}
      <Footers />
    </>
  );
};

