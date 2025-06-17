import React from "react";
import ServiceImg from "./ServiceImg";
import DraggableImage from "./DraggableImage";
import KioskMockup from "../img/KioskMockup.png";

// 쉬운 버전 이미지
import Easy1 from "../img/easy1.png";
import Easy2 from "../img/easy2.png";
import Easy3 from "../img/easy3.png";
import Easy4 from "../img/easy4.png";
import Easy5 from "../img/easy5.png";
import Easy6 from "../img/easy6.png";
import Easy7 from "../img/easy7.png";
import Easy8 from "../img/easy8.png";
import Easy9 from "../img/easy9.png";
import Easy10 from "../img/easy10.png";
import Easy11 from "../img/easy11.png";
import Easy12 from "../img/easy12.png";

// 높낮이 조절 이미지
import Height1 from "../img/height1.png";
import Height2 from "../img/height2.png";
import Height3 from "../img/height3.png";
import Height4 from "../img/height4.png";
import Height5 from "../img/height5.png";
import Height6 from "../img/height6.png";
import Height7 from "../img/height7.png";
import Height8 from "../img/height8.png";
import Height9 from "../img/height9.png";
import Height10 from "../img/height10.png";
import Height11 from "../img/height11.png";

// 알레르기 기능 이미지
import Allergy1 from "../img/allergy1.png";
import Allergy2 from "../img/allergy2.png";
import Allergy3 from "../img/allergy3.png";
import Allergy4 from "../img/allergy4.png";
import Allergy5 from "../img/allergy5.png";
import Allergy6 from "../img/allergy6.png";
import Allergy7 from "../img/allergy7.png";
import Allergy8 from "../img/allergy8.png";
import Allergy9 from "../img/allergy9.png";
import Allergy10 from "../img/allergy10.png";
import Allergy11 from "../img/allergy11.png";
import Allergy12 from "../img/allergy12.png";
import Allergy13 from "../img/allergy13.png";
import Allergy14 from "../img/allergy14.png";
import Allergy15 from "../img/allergy15.png";

// 차별화 서비스 이미지
import BarrierLarge from "../img/barrierLarge.png";

const Swipes = [
  {
    id: 1,
    title: "두가지 주문 방식",
    intro: "사용자 수준에 따라<br/>일반 주문과 쉬운 주문을 선택할 수 있어<br/>누구나 편리하게 주문할 수 있습니다.",
    img: KioskMockup,
    contents: [
      { image: Easy1, text: "사용자 수준에 따라 일반 주문과 쉬운 주문을 선택할 수 있어 누구나 편리하게 주문할 수 있습니다." },
      { image: Easy2, text: "매장 식사 / 포장 선택을 처음에 함으로써 마지막 결제 화면의 불필요한 정보를 줄였습니다." },
      { image: Easy3, text: "포장 선택 시에 일회용 여부를 선택할 수 있습니다." },
      { image: Easy4, text: "기존 키오스크에 비해 사진과 텍스트의 비율을 키웠습니다." },
      { image: Easy5, text: "세부 메뉴나 옵션을 선택할 수 있는 화면으로 카테고리별로 구분하여 정보를 명확하게 인지할 수 있습니다." },
      { image: Easy6, text: "세부 선택에 대한 이미지도 함께 제공하여 주문 실수를 줄일 수 있습니다." },
      { image: Easy7, text: "3분 이상 선택하지 않았을 시 도움 요청 문구가 뜨며, '네'를 선택할 시에 가게 내부로 알람이 갑니다." },
      { image: Easy8, text: "하단에 장바구니가 배치되어 있습니다." },
      { image: Easy9, text: "결제 전 고객이 선택한 메뉴를 한번 더 확인할 수 있습니다." },
      { image: Easy10, text: "쿠폰 사용이나 적립과 같은 혜택 없이 바로 결제 가능합니다. 이는 BF만의 특징으로 주문 시에 필요한 최소한의 과정만 제공합니다." },
      { image: Easy11, text: "팝업으로 영수증 출력 여부가 뜹니다." },
      { image: Easy12, text: "영수증 출력 여부 선택으로 결제는 마무리 됩니다." },
    ]
  },
  {
    id: 2,
    title: "높낮이 조절 기능",
    intro: "휠체어 사용자를 위한 높낮이 자동 조절 기능이 탑재되어 누구나 편리하게 사용할 수 있습니다.",
    img: KioskMockup,
    contents: [
      { image: Height1, text: "오른쪽 하단 슬라이드 바로 화면 높이를 줄일 수 있습니다." },
      { image: Height2, text: "높낮이 조절 기능은 휠체어 사용자나 어린이들을 위한 기능입니다." },
      { image: Height3, text: "높이에 제약을 받지 않고 자율적으로 주문을 진행할 수 있습니다." },
      { image: Height4, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height5, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height6, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height7, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height8, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height9, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height10, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Height11, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
    ]
  },
  {
    id: 3,
    title: "알레르기 정보 제공",
    intro: "주문 시 알레르기 유발 성분이 포함된 메뉴를 자동으로 안내하여 보다 안전한 식사 환경을 제공합니다.",
    img: KioskMockup,
    contents: [
      { image: Allergy1, text: "좌측 하단에 있는 알레르기 버튼을 선택하면 알레르기 선택 화면으로 이동합니다." },
      { image: Allergy2, text: "본인이 주의해야 하는 음식 성분을 선택할 수 있습니다." },
      { image: Allergy3, text: "본인이 주의해야 하는 음식 성분을 선택할 수 있습니다." },
      { image: Allergy4, text: "본인이 주의해야 하는 음식 성분을 선택할 수 있습니다." },
      { image: Allergy5, text: "본인이 주의해야 하는 음식 성분을 선택할 수 있습니다." },
      { image: Allergy6, text: "적용하기를 누르면 자동으로 필터 기능이 실행됩니다." },
      { image: Allergy7, text: "이 기능은 주문 초반 단계인 '주문 방식 선택'과 '매장식사 / 포장' 선택 화면에서 제공됩니다." },
      { image: Allergy8, text: "선택한 음식 성분이 포함된 메뉴를 제외하고 이외의 음식만 노출됩니다." },
      { image: Allergy9, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Allergy10, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Allergy11, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Allergy12, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Allergy13, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Allergy14, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
      { image: Allergy15, text: "주문 과정은 일반 주문 / 쉬운 주문과 동일합니다." },
    ]
  },
  {
    id: 4,
    title: "차별화된 배리어프리 서비스",
    intro: "모든 사용자에게 공평한 디지털 경험을 제공하는 다양한 배리어프리 기능이 포함되어 있습니다.",
    img: KioskMockup,
    contents: [BarrierLarge],
  },
];

function ServiceSwipe({ selectedId }) {
  const selected = Swipes.find((item) => item.id === selectedId);
  if (!selected) return null;

  return (
    <div>
      {selected.id === 4 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            maxWidth: "1560px",
            margin: "0 auto",
            padding: "60px 20px",
            gap: "40px",
          }}
        >
          <div
            style={{
              flex: "1 1 400px",
              minWidth: "300px",
              maxWidth: "600px",
              paddingBottom: "80px",
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ fontSize: "clamp(24px, 2vw, 32px)", fontWeight: "bold", marginBottom: "40px" }}>
              {selected.title}
            </h2>
            <p
              style={{ fontSize: "clamp(18px, 1.6vw, 24px)", lineHeight: "1.6" }}
              dangerouslySetInnerHTML={{ __html: selected.intro }}
            />
          </div>

          <div
            style={{
              position: "relative",
              flex: "1 1 600px",
              maxWidth: "1000px",
              aspectRatio: "1000 / 1205",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0%",
                left: "22.5%",
                width: "55%",
                height: "76%",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <DraggableImage src={selected.contents[0]} width={3000} height={3365} />
            </div>
            <img
              src={selected.img}
              alt="키오스크"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      ) : (
        <ServiceImg
          title={selected.title}
          intro={selected.intro}
          img={selected.img}
          contents={selected.contents}
        />
      )}
    </div>
  );
}

export default ServiceSwipe;
