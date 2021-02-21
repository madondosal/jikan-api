import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../scss/Details.scss";
import getSpinner from "../Spinner/Spinner";

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    };

    getData();

    return () => setLoading(true);
  }, []);

  return { data, isLoading };
};

const CoreDetails = (props) => {
  const url = `https://api.jikan.moe/v3/${props.match.params.type}/${props.match.params.id}`;
  const { data, isLoading } = useGetData(url);

  return (
    <div id="core-details">
      {isLoading ? (
        getSpinner()
      ) : (
        <>
          <img src={data.image_url} />
          <div id="details">
            <p>{`Title: ${data.title}`}</p>
            <p>{`Title English: ${data.title_english}`}</p>
            <p>{`Title Kanji: ${data.title_japanese}`}</p>
            <p>{`Type: ${data.type}`}</p>
            <p>{`Status: ${data.status}`}</p>
            <p>{`Synopsis: ${data.synopsis}`}</p>
            <p>{`Duration: ${data.duration}`}</p>
            <p>{`Score: ${data.score}`}</p>
          </div>
        </>
      )}
    </div>
  );
};

const Characters = (props) => {
  const url = `https://api.jikan.moe/v3/${props.match.params.type}/${
    props.match.params.id
  }/${props.match.params.type === "anime" ? "character_staff" : "characters"}`;
  const { data, isLoading } = useGetData(url);

  const getCharacters = () => {
    return data.characters.map((character) => {
      return (
        <div className="card" key={character.mal_id}>
          <img src={character.image_url} />
          <div className="details">
            <p style={{ fontWeight: "bold" }}>{`Name: ${character.name}`}</p>
            <p>{`Role: ${character.role}`}</p>
          </div>
        </div>
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
    <div style={{ position: "relative" }}>
      <i onClick={scrollLeft} className="fas fa-chevron-circle-left fa-2x"></i>
      <div id="characters">{isLoading ? getSpinner() : getCharacters()}</div>
      <i
        onClick={scrollRight}
        className="fas fa-chevron-circle-right fa-2x"
      ></i>
    </div>
  );
};

const RelatedImages = (props) => {
  const url = `https://api.jikan.moe/v3/${props.match.params.type}/${props.match.params.id}/pictures`;

  const { data, isLoading } = useGetData(url);

  const getRelatedPtictures = () => {
    return data.pictures.map((picture) => {
      return <img src={picture.large} />;
    });
  };

  return (
    <div id="related-images">
      {isLoading ? getSpinner() : getRelatedPtictures()}
    </div>
  );
};

const Reviews = (props) => {
  const url = `https://api.jikan.moe/v3/${props.match.params.type}/${props.match.params.id}/reviews`;
  const { data, isLoading } = useGetData(url);

  const getReviews = () => {
    return data.reviews.map((review) => {
      return (
        <div className="review">
          <div className="review-header">
            <img src={review.reviewer.image_url} />
            <h3>{review.reviewer.username}</h3>
          </div>
          <div className="review-body">
            <p>{review.content}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="reviews" className="hidden-reviews">
      {isLoading ? getSpinner() : getReviews()}
    </div>
  );
};

const Details = (props) => {
  useEffect(() => {
    dispatch({ type: "SETCURRENTPAGE", value: "details" });
  }, []);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.jikan.moe/v3/${props.match.params.type}/${props.match.params.id}`
      );
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    };
    getData();

    return () => setLoading(true);
  }, []);

  const toggleShow = (event) => {
    const reviews = document.getElementById("reviews");
    if (reviews.classList.contains("hidden-reviews")) {
      reviews.classList.remove("hidden-reviews");
      event.target.textContent = "Show Less";
    } else {
      reviews.classList.add("hidden-reviews");
      event.target.textContent = "Show More";
    }
  };

  return (
    <div id="details-page" className="container">
      <>
        {isLoading ? (
          <h1 id="title">Loading...</h1>
        ) : (
          <h1 id="title">{data.title}</h1>
        )}
        <CoreDetails match={props.match} />
        {props.match.params.type === "anime" && (
          <>
            <h2 className="header-title">Trailer</h2>
            <div id="trailer">
              {isLoading ? (
                <h2 style={{ color: "#8fa6ad" }}>Getting Trailer...</h2>
              ) : (
                <iframe src={data.trailer_url}></iframe>
              )}
            </div>
          </>
        )}
        <h2 className="header-title">Characters</h2>
        <Characters match={props.match} />
        <h2 className="header-title">Related Pictures</h2>
        <RelatedImages match={props.match} />
        <h2 style={{ marginBottom: "30px" }} className="header-title">
          Reviews
        </h2>
        <Reviews match={props.match} />
        <div id="review-button">
          <button onClick={toggleShow} id="show-reviews">
            Show More
          </button>
        </div>
      </>
    </div>
  );
};

export default Details;
