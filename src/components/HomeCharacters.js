import React, { useEffect, useState } from "react";
import "../scss/HomeCharacters.scss";
import getSpinner from "../Spinner/Spinner";

const HomeCharacters = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const getCharaters = async () => {
      const response = await fetch("https://api.jikan.moe/v3/top/characters/1");
      const responseData = await response.json();
      setCharacters(responseData.top.slice(0, 4));
    };

    getCharaters();

    return () => setCharacters(null);
  }, []);

  const getPopularCharacters = () => {
    return characters.map((character) => {
      return (
        <div className="character" key={character.mal_id}>
          <img src={character.image_url} />
          <div className="character-details">
            <h3 className="character-name">{character.title}</h3>
            <p className="kanji-name">{character.name_kanji}</p>
            <p className="anime-from">{`Anime: ${character.animeography[0].name}`}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="popular-characters container">
        {characters === null ? getSpinner() : getPopularCharacters()}
      </div>
      <div className="header container">
        <h3 className="header-title">Characters</h3>
        <p>{"See All>>"}</p>
      </div>
    </>
  );
};

export default HomeCharacters;
