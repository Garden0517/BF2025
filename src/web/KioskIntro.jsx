import React, { useEffect, useRef, useState } from "react";
import KioskIntroimg from "../img/KioskIntro.png";

function KioskIntro() {
  const imgRef = useRef(null);
const [hasBeenVisible, setHasBeenVisible] = useState(false); // 한 번만 확대될 상태

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true); // 화면에 처음 보일 때만 true
      }
    },
    { threshold: 0.5 }
  );

  const target = imgRef.current;
  if (target) observer.observe(target);

  return () => {
    if (target) observer.unobserve(target);
  };
}, [hasBeenVisible]); // hasBeenVisible을 의존성에 넣음

  return (
    <div>
      <div
        style={{
          display: "flex", // 가로 정렬
          flexDirection: "row",
          width: "auto",
          height: '100vh',
          padding: "120px 180px", // 바깥 여백
          justifyContent: "space-between",
          alignContent: "space-between",
          overflow: "hidden", // 넘치는 콘텐츠 숨김
        }}
      >
        {/* 왼쪽 텍스트 영역 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "200px",
          }}
        >
          <p style={text}>kiosk design <br /> Barrier-Free System</p>
          <p style={text}>기존 키오스크의 장벽을 없애다.</p>
        </div>

        {/* 이미지 + 마스킹 레이어를 포함하는 컨테이너 */}
        <div style={{
          position: "relative",   // 마스킹 div의 기준점
          width: "auto",
          height: "100%",
          overflow: "hidden",     // 확대 이미지가 넘어가도 숨김
        }}>
          {/* 확대되는 키오스크 이미지 */}
          <img
            ref={imgRef}
            src={KioskIntroimg}
            alt="Kiosk"
            style={{
              transition: "transform 0.8s ease", // 확대 애니메이션
              transform: hasBeenVisible
                ? "scale(1.3) translateY(200px)" // 한 번 보이면 확대 상태 유지
                : "scale(1) translateY(0)",      // 그 전에는 기본
              height: "auto",
              maxHeight: "100%",
              zIndex: 1,
              position: "relative", // zIndex 적용을 위한 설정
            }}
          />

          {/* 이미지 하단을 가리는 마스킹 레이어 */}
          <div
            style={{
              position: "absolute",     // 이미지 기준으로 절대 위치
              bottom: 0,                // 하단에 붙이기
              left: 0,
              width: "100%",            // 이미지 전체 너비만큼
              height: "160px",          // 가릴 영역 높이 조정 가능
              backgroundColor: "#000",  // 배경색 (검정)
              zIndex: 2,                // 이미지보다 위에
            }}
          />
        </div>

        {/* 오른쪽 텍스트 영역 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "200px",
          }}
        >
          <p style={text}>See Better. Touch Easier</p>
          <p style={text}>디지털 접근성을 고려한 인터페이스 구조</p>
        </div>
      </div>
    </div>
  );
}

// 공통 텍스트 스타일 정의
const text = {
  fontSize: "18px",
  color: "white",
};

export default KioskIntro;
