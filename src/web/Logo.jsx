import React from "react";
import LogoImage  from '../img/Logo.png';

function Logo() {
    return (
        <div style={{
            backgroundColor: "#121212",
            display: "flex",              // 핵심
            flexDirection: "column",      // 위아래로 쌓이게
            alignItems: "center",         // 가로 중앙
            justifyContent: "center",     // 세로 중앙
            height: "100vh",              // 뷰포트 전체 높이
            textAlign: "center",

        }}>
            <p style={{fontSize: "27px", color: "white", marginBottom: "42px" }}>
                기존 키오스크의 장벽을 없애다.
            </p>
            <img src={LogoImage} alt="" />
        </div>
    )
}

export default Logo