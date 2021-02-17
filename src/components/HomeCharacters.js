import React, { useEffect, useState } from "react";
import "../scss/HomeCharacters.scss";

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
        <div className="character">
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
    <div className="popular-characters container">
      {characters === null ? <p>Loading...</p> : getPopularCharacters()}
      <div className="header">
        <h3 className="header-title">Popular Characters</h3>
        <p>{"See Characters>>"}</p>
      </div>
    </div>
  );
};

export default HomeCharacters;
