import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../scss/TitleBar.scss";

const TitleBar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const setKeywordInput = (event) => {
    dispatch({ type: "SETKEYWORD", value: event.target.value });
  };

  return (
    state.currentPage !== "details" && (
      <div id="titlebar" className="container">
        <h1 id="title">{state.currentPage}</h1>
        {state.currentPage !== "Home" && state.currentPage !== "details" && (
          <input
            id="search-input"
            placeholder={"search"}
            type="text"
            value={state.keyword}
            onChange={setKeywordInput}
          />
        )}
      </div>
    )
  );
};

export default TitleBar;
