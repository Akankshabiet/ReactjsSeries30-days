import countryFacts from "../api/countryData.json";
import { FaLongArrowAltRight } from "react-icons/fa";
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((country) => (
        
          <div key={country.id} className="card">
            <div className={`container-card ${country.colorClass}`}>
              <p>
                <span className="card-description">Capital:</span>{" "}
                {country.capital}
              </p>
              <p>
                <span className="card-description">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="card-description">Interesting Fact:</span>{" "}
                {country.fact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Properly declared mock data array
// const countryFacts = [
//   {
//     id: 1,
//     capital: "No Capital",
//     population: "Null",
//     fact:
//       "There are 195 countries in the world today, including 193 United Nations member states and 2 observer states.",
//     colorClass: "bg-gray-box"
//   },
//   {
//     id: 2,
//     countryName: "Nepal",
//     capital: "Kathmandu",
//     population: 30000000,
//     fact: "Home of Mount Everest",
//     colorClass: "bg-blue-box"
//   },
//   {
//     id: 3,
//     countryName: "Japan",
//     capital: "Tokyo",
//     population: 125800000,
//     fact: "Land of the Rising Sun",
//     colorClass: "bg-red-box"
//   },
//   {
//     id: 4,
//     countryName: "Australia",
//     capital: "Canberra",
//     population: 25700000,
//     fact: "Home of kangaroos",
//     colorClass: "bg-green-box"
//   }
// ];

// ✅ Home component
export const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation.
            Search and filter through countries.
          </p>
        </div>
      </div>
    </main>
  );
};