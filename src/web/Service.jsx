import React, { useState } from "react";
import ServiceSwipe from "./ServiceSwipe";
import ServiceText from "./ServiceText";

function Service() {
  const [selectedId, setSelectedId] = useState(1); // 기본값 1

  return (
    <div style={{
      marginTop: "520px"
    }}>
      <div>
        <ServiceText/>
      </div>
      {/* 버튼 영역 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setSelectedId(1)}
          style={selectedId === 1 ? InputbuttonStyle : buttonStyle}
        >
          <p style={textStyle}>쉬운 버전</p>
        </button>
        <button
          onClick={() => setSelectedId(2)}
          style={selectedId === 2 ? InputbuttonStyle : buttonStyle}
        >
          <p style={textStyle}>높낮이 조절</p>
        </button>
        <button
          onClick={() => setSelectedId(3)}
          style={selectedId === 3 ? InputbuttonStyle : buttonStyle}
        >
          <p style={textStyle}>알레르기</p>
        </button>
        <button
          onClick={() => setSelectedId(4)}
          style={selectedId === 4 ? InputbuttonStyle : buttonStyle}
        >
          <p style={textStyle}>차별화 서비스</p>
        </button>
      </div>

      {/* 선택된 내용 */}
      <div style={{ marginTop: "80px" }}>
        <ServiceSwipe selectedId={selectedId} />
      </div>
    </div>
  );
}

const InputbuttonStyle = {
  backgroundColor: "#025BD9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "60px",
  width: "200px",
  height: "70px",
  margin: "20px 30px",
  cursor: "pointer",
};
const buttonStyle = {
  backgroundColor: "rgb(0.0.0.0)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #FFFFFF",
  borderRadius: "60px",
  width: "200px",
  height: "70px",
  margin: "20px 30px",
  cursor: "pointer",
};

const textStyle = {
  fontSize: "24px",
  color: "#fff",
};

export default Service;
