import React, { useState, useEffect } from "react";
import "../scss/Showcase.scss";

const Showcase = () => {
  const [topData, setTopData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.jikan.moe/v3/top/characters/1");
      const responseData = await response.json();
      setLoading(false);
      setTopData((state) => {
        return { top: responseData.top.slice(0, 5) };
      });
    };

    getData();
  }, []);

  const getTopCards = () => {
    if (topData === null) {
      return;
    }

    return topData.top.map((topItem) => {
      return (
        <div className="top-item">
          <div className="top-image">
            <img src={topItem.image_url} />
          </div>
          <div className="details">
            <h3 className="top-header">Details</h3>
            <p>{`Name: ${topItem.title}`}</p>
            <p>{`Name Kanji: ${topItem.name_kanji}`}</p>
            <p>{`Anime: ${topItem.animeography[0].name}`}</p>
            <p>{`Manga: ${topItem.mangaography[0].name}`}</p>
            <p>{`rank: ${topItem.rank}`}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="showcase-cards" className="container">
      {getTopCards()}
    </div>
  );
};

export default Showcase;
