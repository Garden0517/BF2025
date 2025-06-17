import React from "react";
import DeskResearch from "./DeskResearch";
import Desk1 from "../img/Desk1.png";
import Desk2 from "../img/Desk2.png";
import Desk3 from "../img/Desk3.png";
import "./Style.css";

// 고령자
import old1 from "../img/old1.png";
import old2 from "../img/old2.png";
import old3 from "../img/old3.png";
import old4 from "../img/old4.png";
import old5 from "../img/old5.png";
import old6 from "../img/old6.png";
import old7 from "../img/old7.png";
import old8 from "../img/old8.png";
import old9 from "../img/old9.png";
import old10 from "../img/old10.png";
import old11 from "../img/old11.png";
import old12 from "../img/old12.png";
import old13 from "../img/old13.png";

// 장애인
import disabled1 from "../img/disabled1.png"; //시각장애인
import disabled2 from "../img/disabled2.png";
import disabled3 from "../img/disabled3.png"

// 어린이
import children1 from "../img/children1.png";
import children2 from "../img/children2.png";

const Desk_1 = [
    {
        id: 1,
        img: old1,
        title: "고령자",
        intro: "저한테는 주문하는 법이 너무 복잡하고 어려워요..."
    },
    {
        id: 2,
        img: old2,
        title: "고령자",
        intro: "제가 주문하는게 느리니깐 뒷사람 눈치가 보여요..."
    },
    {
        id: 3,
        img: disabled1,
        title: "장애인",
        intro: "눈이 잘 안보여서 화면 내용을 음성으로 안내해주는 TTS 기능이 필요해요."
    },
    {
        id: 4,
        img: old3,
        title: "고령자",
        intro: "주문하는법이 어려운데 어떻게 도움을 요청해야할지 모르겠어요.."
    },
    {
        id: 5,
        img: Desk2,
        title: "외국인",
        intro: "키오스크에 한국말 밖에 없다. 뭐가 뭔지 몰라"
    },
    {
        id: 6,
        img: children1,
        title: "어린이",
        intro: "막 뭐가 많아서 어려워요."
    },
    {
        id: 7,
        img: disabled2,
        title: "장애인",
        intro: "휠체어를 타고 있는데 화면이 너무 높아서 위쪽 버튼을 못 눌러요."
    },
    {
        id: 8,
        img: old4,
        title: "고령자",
        intro: "영어랑 막 말들이 이리저리 너무 어려워서 뭐가 뭔지 모르겠네요..."
    },
    {
        id: 9,
        img: old5,
        title: "고령자",
        intro: "글씨가 너무 작고 뭐부터 눌러야 할지 몰라서 그냥 포기했어요."
    },
]
const Desk_2 = [
    {
        id: 10,
        img: old6,
        title: "고령자",
        intro: "시간이 너무 촉박한 것 같아요. 뒤에 사람들이 줄 서 있으면 더 마음이 급해져요"
    },
    {
        id: 11,
        img: disabled1,
        title: "장애인",
        intro: "눈이 잘 안보여서 화면 내용을 음성으로 안내해주는 TTS 기능이 필요해요."
    },
    {
        id: 12,
        img: old7,
        title: "고령자",
        intro: "직원이 옆에서 도와주면 좋고, 아예 '쉬운 주문' 같은 버튼이 처음에 있었으면 좋겠어요"
    },
    {
        id: 13,
        img: old8,
        title: "고령자",
        intro: "그림이 더 크게 나오고, 기계가 말로 설명해주면 좋겠어요"
    },
    {
        id: 14,
        img: children2,
        title: "어린이",
        intro: "키가 작아서 손이 잘 안닿아요.."
    },
    {
        id: 15,
        img: Desk3,
        title: "외국인",
        intro: "이것 저것 죄다 한국말, 영어라도 추가해줘"
    },
    {
        id: 16,
        img: old9,
        title: "고령자",
        intro: "차라리 '도움 요청' 같은 버튼이 처음에 크게 있었으면 좋겠어요."
    },
    {
        id: 17,
        img: old10,
        title: "고령자",
        intro: "편리하다는 건 알겠는데, 우리 같은 연령이 있는 사람들한텐 너무 복잡해요."
    },
    {
        id: 18,
        img: disabled3,
        title: "장애인",
        intro: "저 같이 휠체어를 타고 있는 사람들을 위해서 화면을 아래로 조절할 수 있었으면 좋겠어요"
    },
]
const Desk_3 = [
    {
        id: 19,
        img: children1,
        title: "어린이",
        intro: "키가 작아서 손이 잘 안닿아요..."
    },
    {
        id: 20,
        img: old11,
        title: "고령자",
        intro: "저한테는 주문하는 법이 너무 복잡하고 어려워요.."
    },
    {
        id: 21,
        img: old12,
        title: "고령자",
        intro: "제가 주문하는게 느리니깐 뒷사람 눈치가 보여요.."
    },
    {
        id: 22,
        img: Desk1,
        title: "disabled1",
        intro: "눈이 잘 안보여서 화면 내용을 음성으로 안내해주는 TTS 기능이 필요해요."
    },
    {
        id: 23,
        img: old13,
        title: "고령자",
        intro: "주문하는법이 어려운데 어떻게 도움을 요청해야할지 모르겠어요.."
    },
    {
        id: 24,
        img: old1,
        title: "고령자",
        intro: "글씨가 너무 작고 뭐부터 눌러야 할지 몰라서 그냥 포기했어요."
    },
    {
        id: 25,
        img: children2,
        title: "어린이",
        intro: "막 뭐가 많아서 어려워요."
    },
    {
        id: 26,
        img: disabled2,
        title: "장애인",
        intro: "휠체어를 타고 있는데 화면이 너무 높아서 위쪽 버튼을 못 눌러요."
    },
    {
        id: 27,
        img: old2,
        title: "고령자",
        intro: "그림이 더 크게 나오고, 기계가 말로 설명해주면 좋겠어요"
    },
]
function SlideRow({ data, duration = "30s", animationName = "slide-horizontal" }) {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "inline-flex",
          animation: `${animationName} ${duration} linear infinite`,
          whiteSpace: "nowrap",
        }}
      >
        {[...data, ...data].map((li, idx) => (
          <DeskResearch
            key={`${li.id}-${idx}`}
            img={li.img}
            title={li.title}
            intro={li.intro}
          />
        ))}
      </div>
    </div>
  );
}

function DeskAnimation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        backgroundColor: "#121212",
        padding: "20px 0",
      }}
    >
      <SlideRow data={Desk_1} duration="45s"/>
      <SlideRow data={Desk_2} duration="50s"/>
      <SlideRow data={Desk_3} duration="40s"/>
    </div>
  );
}




export default DeskAnimation