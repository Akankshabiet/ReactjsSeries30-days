import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/layout/CounteryCard"; // Make sure this is imported

// ✅ Add a simple loader
const Loader = () => <div>Loading...</div>;

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Manage loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (err) {
        console.error("Failed to fetch countries", err);
      } finally {
        setLoading(false); // ✅ Stop loader
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry) => (
          <CountryCard key={curCountry.id} country={curCountry} />
        ))}
      </ul>
    </section>
  );
};
