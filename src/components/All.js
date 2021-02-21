import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { GlobalContext } from "../context/GlobalContext";
import getSpinner from "../Spinner/Spinner";
import "../scss/AllAnime.scss";
import Pagenation from "./Pagenation";

const All = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [url, setUrl] = useState(
    `https://api.jikan.moe/v3/search/${props.data.type}?q=&order_by=title&page=1`
  );

  const { data, setData, isLoading, setLoading, page, setPage } = useFetch(url);

  useEffect(() => {
    setLoading(true);
    if (state.keyword === "") {
      setUrl(
        `https://api.jikan.moe/v3/search/${props.data.type}?q=&order_by=title&page=${page}`
      );
      dispatch({ type: "SETCURRENTPAGE", value: `All ${props.data.type}` });
    } else {
      setUrl(
        `https://api.jikan.moe/v3/search/${props.data.type}?q=${state.keyword}&page=${page}`
      );
      dispatch({
        type: "SETCURRENTPAGE",
        value: `Results for \"${state.keyword}\"`,
      });
    }
  }, [state.keyword, page]);

  const getCards = () => {
    if (state.fetchError) {
      return (
        <div id="no-results-found">
          <h2>{`No results found for \"${state.keyword}\"`}</h2>
          <p>
            The keyword you searched for does not match any of our data. Make
            sure that the spelling is correct!
          </p>
        </div>
      );
    }
    return data.map((unitData) => {
      return (
        <div className="card" key={unitData.mal_id}>
          <img src={unitData.image_url} />
          <div className="details">
            <p style={{ fontWeight: "bold" }}>{unitData.title}</p>
            <p>{unitData.type}</p>
            <p>{unitData.score}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div id="all" className="container">
        {isLoading ? getSpinner() : getCards()}
      </div>
      <Pagenation page={page} setPage={setPage} />
    </>
  );
};

export default All;
