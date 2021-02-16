import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import "../scss/Home.scss";
import Showcase from "./Showcase";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => dispatch({ type: "SETCURRENTPAGE", value: "home" }), []);

  return (
    <main>
      <Showcase />
    </main>
  );
};

export default Home;
