import React, { useEffect, useState } from "react";
import { getAllBuses } from "../api/busApi";

const BusResults = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const baseURL = import.meta.env.VITE_BASE_URL;
  //   console.log(baseURL);
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const data = await getAllBuses();
        setBuses(data);
      } catch (error) {
        console.error("Failed to fetch buses.");
      } finally {
        setLoading(false);
      }
    };
    fetchBuses();
  }, []);

  if (loading) return <p>Loading buses....</p>;
  if (!buses.length) return <p>No buses available....</p>;

  return (
    <div>
      {buses.map((bus) => (
        <div key={bus._id}>{bus.busname}</div>
      ))}
    </div>
  );
};

export default BusResults;
