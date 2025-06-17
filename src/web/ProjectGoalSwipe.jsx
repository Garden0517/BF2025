import React, { useState, useEffect } from "react";
import Goal1 from "../img/Goal1.png";
import Goal2 from "../img/Goal2.png";
import Goal3 from "../img/Goal3.png";
import Goal4 from "../img/Goal4.png";
import Goal5 from "../img/Goal5.png";
import LeftImg from "../img/LeftImg.png";
import RightImg from "../img/RightImg.png";

const images = [Goal1, Goal2, Goal3, Goal4, Goal5];

function ProjectGoalSwipe() {
  const [index, setIndex] = useState(0);
  const [leftBg, setLeftBg] = useState("rgba(255,255,255,0.7)");
  const [rightBg, setRightBg] = useState("rgba(255,255,255,0.7)");

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setRightBg("rgba(255,255,255,0.4)");
    setTimeout(() => setRightBg("rgba(255,255,255,0.7)"), 200);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setLeftBg("rgba(255,255,255,0.4)");
    setTimeout(() => setLeftBg("rgba(255,255,255,0.7)"), 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "81vw", // 1920px 기준 1560px
          aspectRatio: "16 / 9", // 고정 비율 유지
          borderRadius: "1.5vw",
          overflow: "hidden",
          maxWidth: "1560px",
          maxHeight: "855px",
        }}
      >
        <img
          src={images[index]}
          alt={`Goal ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />

        {/* 버튼 영역 */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5vw",
            right: "1.5vw",
            display: "flex",
            gap: "1vw",
          }}
        >
          <button
            onClick={handlePrevious}
            style={{
              width: "2.8vw",
              height: "2.8vw",
              minWidth: "40px",
              minHeight: "40px",
              border: "none",
              borderRadius: "100px",
              backgroundColor: leftBg,
              transition: "background-color 0.3s ease",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={LeftImg} alt="이전" style={{ width: "60%" }} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: "2.8vw",
              height: "2.8vw",
              minWidth: "40px",
              minHeight: "40px",
              border: "none",
              borderRadius: "100px",
              backgroundColor: rightBg,
              transition: "background-color 0.3s ease",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={RightImg} alt="다음" style={{ width: "60%" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectGoalSwipe;
