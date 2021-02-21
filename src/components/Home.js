import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import "../scss/Home.scss";
import Showcase from "./Showcase";
import DataPreview from "./DataPreview";
import HomeCharacters from "./HomeCharacters";

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => dispatch({ type: "SETCURRENTPAGE", value: "Home" }), []);

  return (
    <main>
      <Showcase />
      <div id="top-content-header" className="container">
        <h1>Top Content Right Now!</h1>
      </div>
      <DataPreview
        title="Anime"
        url="https://api.jikan.moe/v3/top/anime/1/airing"
      />
      <DataPreview
        title="Manga"
        url="https://api.jikan.moe/v3/top/manga/1/bypopularity"
      />
      <HomeCharacters />
      <div className="container" id="membership-info">
        <h1 id="membership">Join Crimson Heaven!</h1>
        <p className="membership-text">
          Dolore deserunt est minim ullamco tempor tempor. Ipsum aute veniam
          Lorem officia id. Cupidatat quis proident deserunt aute sint proident
          culpa ipsum officia.Dolore in amet proident non. Nulla culpa
          incididunt duis nostrud ipsum consectetur. Proident ullamco laboris do
          qui enim ipsum anim ea esse quis. Velit incididunt pariatur et
          pariatur fugiat velit pariatur reprehenderit et ea tempor.Dolore
          reprehenderit est aliquip ut excepteur. Id ea duis nulla minim
          excepteur. Dolore non officia deserunt id ex id occaecat.
        </p>
        <p className="membership-text">
          Ut sint duis aute minim aliqua commodo. Occaecat officia officia esse
          aliquip aute cillum reprehenderit sint nulla est aliquip et est.
          Aliquip proident esse fugiat sint laborum labore voluptate amet elit
          sint ea dolor do occaecat. Sit incididunt consectetur reprehenderit
          consectetur enim. Exercitation aliqua laboris in ut mollit
          reprehenderit ex ullamco ex incididunt occaecat. Et amet Lorem non
          dolore eiusmod. Proident consectetur occaecat sint laborum nisi
          ad.Officia nostrud velit elit consectetur. Cillum anim exercitation
          magna esse commodo eu cillum. Dolore officia in enim elit Lorem
          cupidatat dolore voluptate anim eu Lorem.
        </p>
        <div id="buttons">
          <a href="#" className="btn-lg">
            Start 30 days free!
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
