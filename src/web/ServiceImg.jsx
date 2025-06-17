import React, { useState } from "react";

function ServiceImg(props) {
  const { title, intro, img, contents = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prev) => (prev + 1) % contents.length);
  };

  const currentContent = contents[currentIndex];

  return (
    <div
      style={{
        maxWidth: "1560px",
        margin: "0 auto",
        padding: "60px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px",
      }}
    >
      {/* 텍스트 영역 */}
      <div
        style={{
          flex: "1 1 400px",
          minWidth: "300px",
          maxWidth: "600px",
          paddingBottom: "80px",
          boxSizing: "border-box",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: "clamp(24px, 2vw, 32px)",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            {title}
          </h2>
        )}
        <p
          style={{
            fontSize: "clamp(18px, 1.6vw, 24px)",
            lineHeight: "1.6",
          }}
          dangerouslySetInnerHTML={{ __html: intro }}
        />

        {currentContent?.text && (
          <p
            style={{
              fontSize: "clamp(16px, 1.2vw, 20px)",
              color: "#aaa",
              marginTop: "40px",
            }}
          >
            {currentContent.text}
          </p>
        )}
      </div>

      {/* 이미지 영역 */}
      <div
        style={{
          position: "relative",
          flex: "1 1 600px",
          maxWidth: "1000px",
          aspectRatio: "1000 / 1205", // 키오스크 기준 비율 유지
        }}
      >
        {/* 콘텐츠 이미지 */}
        {currentContent?.image && (
          <img
            src={currentContent.image}
            alt="콘텐츠 이미지"
            onClick={handleImageClick}
            style={{
              position: "absolute",
              width: "55%", // 키오스크 비율 기준
              top: "8%",
              left: "22.5%",
              zIndex: 1,
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        )}

        {/* 키오스크 이미지 */}
        <img
          src={img}
          alt="키오스크"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export default ServiceImg;
