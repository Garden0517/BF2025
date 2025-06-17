import React from "react";
import Card from "./Card";
// import Card1 from "../img/Card1.png";
// import Card2 from "../img/Card2.png";
// import Card3 from "../img/Card3.png";
// import Card4 from "../img/Card4.png";
// import Card5 from "../img/Card5.png";
// import Card6 from "../img/Card6.png";
// import Card7 from "../img/Card7.png";
// import Card8 from "../img/Card8.png";
// import Card9 from "../img/Card9.png";

import Card1 from "../img/Card1.png";
import Card2 from "../img/Card2.png";
import Card3 from "../img/Card3.png";
import Card4 from "../img/Card4.png";
import Card5 from "../img/Card5.png";
import Card6 from "../img/Card6.png";
import Card7 from "../img/Card7.png";
import Card8 from "../img/Card8.png";
import Card9 from "../img/Card9.png";
import Card10 from "../img/Card10.png";

const Swipes = [
    // {
    //     id: 1,
    //     title: "두가지 주문 방식",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     // hashtags: [
    //     //     "# 사용자 맞춤 주문 환경", 
    //     //     "# 디지털 소외계층 배려"
    //     //     ],
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card1, // import한 변수 사용
    // },
    // {
    //     id: 2,
    //     title: "주문 단계 간소화",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card2,
    // },
    // {
    //     id: 3,
    //     title: "높낮이 조절절",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card3,
    // },
    // {
    //     id: 4,
    //     title: "결제 과정 시각화화",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card4,
    // },
    // {
    //     id: 5,
    //     title: "음성 안내 TTS",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card5,
    // },
    // {
    //     id: 6,
    //     title: "도움 요청 기능",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card6,
    // },
    // {
    //     id: 7,
    //     title: "다국어 지원",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card7,
    // },
    //     {
    //     id: 8,
    //     title: "텍스트 확대",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card8,
    // },
    //     {
    //     id: 9,
    //     title: "고대비 지원",
    //     intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    //     hashtags: "# 사용자 맞춤 주문 환경<br/># 디지털 소외계층 배려",
    //     img: Card9,
    // },

        {
            id: 1,
            img: Card1
        },
        {
            id: 2,
            img: Card2
        },
        {
            id: 3,
            img: Card3
        },
        {
            id: 4,
            img: Card4
        },                
        {
            id: 5,
            img: Card5
        },
        {
            id: 6,
            img: Card6
        },
        {
            id: 7,
            img: Card7
        },
        {
            id: 8,
            img: Card8
        },               
        {
            id: 9,
            img: Card9
        },
        {
            id: 10,
            img: Card10
        },
]


function CardSwipe() {
  return (
    <div style={{ position: "relative", margin: "0 180px" }}>
      <div
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          marginTop: "80px",
          paddingBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexShrink: 0,
            height: "100%",
          }}
        >
          {/* 왼쪽 그라데이션
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "180px",
              height: "100%",
              background: "linear-gradient(to right, rgb(0, 0, 0), transparent)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          /> */}

          {/* 오른쪽 그라데이션 */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "180px",
              height: "100%",
              background: "linear-gradient(to left, #121212, transparent)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* 카드 리스트 */}
          {Swipes.map((li) => (
            <Card key={li.id} img={li.img}/>
          ))}
          <div style={{display: "flex", minWidth: "180px", height: "100%", background: "white", flexShrink: 0}}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSwipe;