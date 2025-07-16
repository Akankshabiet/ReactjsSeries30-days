import { useParams } from "react-router-dom";
import { getCountryData } from "../api/postApi";
import { useState, useEffect } from "react";
import Loader from "../UI/Loader"
// Loader Component


export const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true); // simple loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData(id);
        setCountry(res.data);
      } catch (error) {
        console.error("Failed to fetch country data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Loader />;

  if (!country) return <p>No country data found.</p>;

  return (
    <div>
      <h1>Country Details</h1>
      <p>Name: {country.name}</p>
      <p>Capital: {country.capital}</p>
      {/* Add more fields as needed */}
    </div>
  );
};
