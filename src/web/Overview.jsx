import React from "react";
import "./Style.css";
import useFadeInOnScroll from "./useFadeInOnScroll"; // import 추가


function Overview() {
    const [ref, visible] = useFadeInOnScroll(); // 훅 호출

    return (
        <div ref={ref} className={`fade-init ${visible ? "fade-up" : ""}`} // JSX에 반영
        style={{
            padding: "120px 180px",
            height: "100vh",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>

            <p style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "50px"}}>Overview</p>

            <div style={{
                display  : "flex",
                justifyContent: "space-between",
                alignItems: "center",
                
            }}>
                <h2 style={{ 
                    fontSize: "64px",
                    fontWeight: "bold",
                    whiteSpace: "pre-line", // 줄바꿈 유지
                    margin: 0,
                }}>
                    모두를 위한 <br/> 키오스크 시스템
                </h2>
                <p style={{ 
                    fontSize: "24px",
                    maxWidth: "750px",
                    margin: 0,
                }}>
                    모두가 평등하게 기술을 누릴 수 있도록, 기존 키오스크에 배리어프리 시스템을 적용했습니다. 장벽 없는 주문을 통해 디지털 격차를 줄이고, 더 많은 이들이 스스로 주문할 수 있도록 돕습니다.
                </p>
            </div>
        </div>
    )
}

export default Overview