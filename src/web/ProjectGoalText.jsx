import React from "react";
import "./Style.css";
import useFadeInOnScroll from "./useFadeInOnScroll"; // import 추가

function ProjectGoalText() {
    const [ref, visible] = useFadeInOnScroll(); // 훅 호출

    return (
        <div ref={ref} className={`fade-init ${visible ? "fade-up" : ""}`} // JSX에 반영
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100vh", // 전체 화면 기준 중앙 정렬
            width: "100%"
        }}>
            <div style={{fontSize: "26px", fontWeight: "bold", marginBottom: "60px"}}> Project Goal </div>
                <div className="label">

                <p className="text-wrapper" style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    whiteSpace: "pre-line", // \n 줄바꿈 적용 가능
                }}
                >
                    기존 키오스크에 배리어프리 시스템을 적용해{"\n"}
                    소상공인·정부·디지털 소외 계층의 불편을 해결합니다.
                </p>
            </div>
        </div>
        
    )
}

export default ProjectGoalText