import React from "react";
import CardSwipe from "./CardSwipe";

function CardSection() {
    return (
         <div
            style={{
                height: "100vh",             // 전체 화면 높이
                display: "flex",             // 중앙 정렬을 위한 flex
                flexDirection: "column",     // 위에서 아래로 정렬
                justifyContent: "center"     // 수직 중앙 정렬
            }}
        >
            <div
                style={{
                    textAlign: "left",  marginLeft: "180px" }}
            >
                <h2 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "16px" }}>
                    장벽을 낮추는 10가지 변화
                </h2>
                <p style={{ fontSize: "30px", color: "#E4E4E4", margin: 0 }}>
                    디지털 접근성 향상을 위한 키오스크의 핵심 변화 9가지를 소개합니다.
                </p>
            </div>

            {/* 카드 슬라이드 영역 */}
            <CardSwipe/>
        </div>
    );
}

export default CardSection;
