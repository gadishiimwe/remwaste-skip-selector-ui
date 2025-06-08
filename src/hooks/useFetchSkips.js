// src/hooks/useFetchSkips.js
import { useState, useEffect } from "react";

const useFetchSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
        const data = await response.json();
        setSkips(data);
      } catch (error) {
        console.error("Error fetching skips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skips, loading };
};

export default useFetchSkips;
