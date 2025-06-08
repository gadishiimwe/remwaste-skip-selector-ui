// src/hooks/useFetchSkips.js
import { useState, useEffect } from "react";

const useFetchSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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


  return { skips, loading };
};

export default useFetchSkips;
