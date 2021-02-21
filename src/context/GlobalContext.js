import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  function reducer(state, action) {
    switch (action.type) {
      case "SETCURRENTPAGE":
        return { ...state, currentPage: action.value };
      case "SETKEYWORD":
        return { ...state, keyword: action.value };
      case "SETFETCHERROR":
        return { ...state, fetchError: action.value };
      default:
        throw new Error("Unexpected Action Type!");
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    currentPage: "Home",
    keyword: "",
    fetchError: false,
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
