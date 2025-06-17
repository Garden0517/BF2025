import React from "react";
import "./Style.css";
import Text from "../img/Text.png"
import useFadeInOnScroll from "./useFadeInOnScroll"; // import 추가

function Intro () {
    const [ref, visible] = useFadeInOnScroll(); // 훅 호출

    return (
        <div ref={ref} className={`fade-init ${visible ? "fade-up" : ""}`} // JSX에 반영
        style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",         // 가로 중앙
            justifyContent: "center",     // 세로 중앙
            // textAlign: "center"
        }}>
            {/* <div className="label" >
                <p className="text-wrapper" style={{
                fontSize: "106px",
                fontWeight: "500",
                marginBottom: "22px"
            }}>
                    이 모든 것을 해결한
                </p>
            </div>
            <div className="label">
                <p className="text-wrapper" style={{
                fontSize: "150px",
                fontWeight: "bold",
            }}>
                    배리어프리 시스템
                </p>
            </div> */}

            <img src={Text} alt="" />
        </div>
        
    )
}

export default Intro