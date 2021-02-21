import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useFetch = (url) => {
  const { dispatch } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (!("results" in responseData)) {
          dispatch({ type: "SETFETCHERROR", value: true });
          setLoading(false);
          return;
        }
        dispatch({ type: "SETFETCHERROR", value: false });
        setData(responseData.results);
        setLoading(false);
      });

    return () => setLoading(true);
  }, [url]);

  return { data, setData, isLoading, setLoading, page, setPage };
};

export default useFetch;
