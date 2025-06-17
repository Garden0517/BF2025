import React from "react";
import Design1 from "../img/Design1.png";
import Design2_1 from "../img/Design2_1.png";
import Design2_2 from "../img/Design2_2.png";
import Design3_1 from "../img/Design3_1.png";
import Design3_2 from "../img/Design3_2.png";
import Design4_1 from "../img/Design4_1.png";
import Design4_2 from "../img/Design4_2.png";

function Design() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* 첫 번째 이미지: 전체 너비 반응형 */}
      <div>
        <img
          src={Design1}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* 두 번째 줄: 나란히 반반 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {[Design2_1, Design2_2].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            style={{
              width: "50%",
              minWidth: "300px",
              height: "auto",
              maxWidth: "100%",
              display: "block",
            }}
          />
        ))}
      </div>

      {/* 본문 콘텐츠 */}
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        {/* 텍스트 블록 */}
        <div
          style={{
            marginTop: "100px",
            marginBottom: "80px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 26px)",
              fontWeight: "bold",
              flex: "1 1 200px",
              margin: 0,
            }}
          >
            Color
          </p>

          <p
            style={{
              fontSize: "clamp(16px, 1.5vw, 24px)",
              flex: "2 1 400px",
              maxWidth: "750px",
              margin: 0,
            }}
          >
            고대비 색상을 적용해 시각 인식을 높였으며, 시력 저하나 고령층 등 누구나 쉽게 사용할 수 있는 배리어프리 키오스크를 구현했습니다.
          </p>
        </div>

        {/* 이미지 두 줄 (반반) */}
        {[ [Design3_1, Design3_2], [Design4_1, Design4_2] ].map((group, gIdx) => (
          <div
            key={gIdx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "60px",
            }}
          >
            {group.map((img, iIdx) => (
              <img
                key={iIdx}
                src={img}
                alt=""
                style={{
                  width: "48%",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design;
