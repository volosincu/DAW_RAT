import { useState, useEffect } from "react";
import keyAPI from "./keyAPI";

const contextKey = "search engine ID";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch( `https://www.googleapis.com/customsearch/v1?key=${keyAPI}&cx=${contextKey}&q=${term}`)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};
export default useGoogleSearch;