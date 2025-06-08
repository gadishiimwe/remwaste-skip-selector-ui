// src/hooks/useFetchSkips.js
import { useState, useEffect } from "react";

const useFetchSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
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
=======
  fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched skips:", data); // See full structure
      setSkips(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching skips:", error);
      setLoading(false);
    });
}, []);

>>>>>>> a731120ab112c728e8c935e9f2daa2fe420fc96f

  return { skips, loading };
};

export default useFetchSkips;
