import React from "react";
import KioskImage from "../img/BF_Kiosk1.png";

function Kiosk() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "clamp(150px, 16vw, 310px) clamp(20px, 9vw, 180px) clamp(150px, 25vh, 485px)",
      }}
    >
      <img
        src={KioskImage}
        alt="키오스크"
        style={{
          width: "90vw",
          maxWidth: "fit-content",        // 최대 크기 제한
          height: "auto",            // 비율 유지
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default Kiosk;
