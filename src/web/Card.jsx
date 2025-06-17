import React from "react";

function Card({ img }) {
  return (
    <div style={{ marginRight: "20px" }}>
      <img
        src={img}
        alt="카드"
        style={{
          width: "345px",
          height: "auto",
          marginRight: "60px"
        }}
      />
    </div>
  );
}

export default Card;
