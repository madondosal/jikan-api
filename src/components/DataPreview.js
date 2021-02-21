import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/DataPreview.scss";
import getSpinner from "../Spinner/Spinner";

const DataPreview = (props) => {
  const [imageData, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(props.url);
      const responseData = await response.json();
      setData(responseData.top.slice(0, 15));
    };

    getData();

    return () => {
      setData(null);
    };
  }, []);

  const getPreviewTiles = () => {
    return imageData.map((image) => {
      return (
        <Link to={`/details/${props.title.toLowerCase()}/${image.mal_id}`}>
          <img src={image.image_url} key={image.mal_id} />
        </Link>
      );
    });
  };

  const scrollRight = (event) => {
    event.target.previousElementSibling.scrollLeft += 768;
  };

  const scrollLeft = (event) => {
    event.target.nextElementSibling.scrollLeft -= 768;
  };

  return (
    <>
      <div className="container preview">
        <i
          onClick={scrollLeft}
          className="fas fa-chevron-circle-left fa-2x"
        ></i>
        <div className="preview-tiles">
          {imageData === null ? getSpinner() : getPreviewTiles()}
        </div>
        <i
          onClick={scrollRight}
          className="fas fa-chevron-circle-right fa-2x"
        ></i>
      </div>
      <div className="header container">
        <h3 className="header-title">{props.title}</h3>
        <p className="header-link">{"See All>>"}</p>
      </div>
    </>
  );
};

export default DataPreview;
