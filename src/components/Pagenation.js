import React from "react";

const Pagenation = (props) => {
  const previousPage = () => {
    if (props.page === 1) {
      return;
    } else {
      props.setPage((page) => (page -= 1));
      window.scrollTo(0, 0);
    }
  };

  const nextPage = () => {
    props.setPage((page) => (page += 1));
    window.scrollTo(0, 0);
  };

  const pagenationStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#8fa6ad",
    fontWeight: "bold",
    width: "90%",
    position: "relative",
    top: "65px",
    maxWidth: "1100px",
    margin: "25px auto",
  };
  return (
    <div style={pagenationStyle} id="pagenation">
      <p style={{ cursor: "pointer" }} onClick={previousPage}>
        Prev
      </p>
      <p style={{ cursor: "pointer" }} onClick={nextPage}>
        Next
      </p>
    </div>
  );
};

export default Pagenation;
