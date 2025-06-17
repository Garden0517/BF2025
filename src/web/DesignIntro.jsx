import React from "react";
import "./Style.css";
import useFadeInOnScroll from "./useFadeInOnScroll"; // import 추가

function DesignIntro () {
    const [ref, visible] = useFadeInOnScroll(); // 훅 호출

    return (
        <div ref={ref} className={`fade-init ${visible ? "fade-up" : ""}`} // JSX에 반영
        style={{
            display: "flex",
            alignItems: "center",         // 가로 중앙
            justifyContent: "center",     // 세로 중앙
            textAlign: "center",
            marginTop: "430px",
            marginBottom: "230px"
        }}>
            <div className="label">

                <p className="text-wrapper" style={{
                    fontSize: "64px",
                    fontWeight: "bold"
                }}>
                    형태로 완성하는 배리어프리
                </p>
            </div>
        </div>
        
    )
}

export default DesignIntro