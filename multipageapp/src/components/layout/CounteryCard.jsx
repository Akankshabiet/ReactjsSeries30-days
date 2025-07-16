import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  // Fix: use lowercase `country`, not `Country`
  const { flags, name, population, region, capital } = country;

  return (
    <li className="country-card card">
      <div className="cotaier-card bg-white-box">
        <img src={flags?.svg} alt={flags?.alt || "Flag"} />

        <div className="countryInfo">
          <p className="card-title">{name?.common}</p>

          <p>
            <span className="card-discription">Population: </span>
            {population?.toLocaleString() ?? "N/A"}
          </p>

          <p>
            <span className="card-discription">Region: </span>
            {region ?? "N/A"}
          </p>

          <p>
            <span className="card-discription">Capital: </span>
            {capital?.[0] ?? "N/A"}
          </p>

          <NavLink to={`/country/${name?.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
