import React, { useState, useEffect } from "react";
import "../scss/DataPreview.scss";

const DataPreview = (props) => {
  const [imageData, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(props.url);
      const responseData = await response.json();
      setData(responseData.top.slice(0, 4));
    };

    getData();

    return () => {
      setData(null);
    };
  }, []);

  const getPreviewTiles = () => {
    return imageData.map((image) => {
      return <img src={image.image_url} key={image.mal_id} />;
    });
  };

  return (
    <div className="container preview">
      <div className="preview-tiles">
        {imageData === null ? <p>loading</p> : getPreviewTiles()}
      </div>
      <div className="header">
        <h3 className="header-title">{props.title}</h3>
        <p className="header-link">{"See All>>"}</p>
      </div>
    </div>
  );
};

export default DataPreview;
