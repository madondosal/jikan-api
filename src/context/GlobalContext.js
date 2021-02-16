import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  function reducer(state, action) {
    switch (action.type) {
      case "SETCURRENTPAGE":
        return { ...state, currentPage: action.value };
      default:
        throw new Error("Unexpected Action Type!");
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    currentPage: "home",
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
