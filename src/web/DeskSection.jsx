import React from "react";
import DeskAnimation from "./DeskAnimation";
import DeskText from "./DeskText";

function DeskSection() {
    return (
        <div>
            <div
                style={{ textAlign: "left", marginLeft: "180px", marginTop: "350px" }}
            >
                <p style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "50px"}}>
                    Desk Research
                </p>
                <h2 style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "16px" }}>
                    불편에서 시작된 변화
                </h2>
                <p style={{ fontSize: "30px", color: "#E4E4E4", marginBottom: "140px" }}>
                    키오스크 앞에서 멈춰선 사람들, 불편을 겪는 순간들을 있는 그대로 담았습니다.
                </p>
            </div>

            <DeskAnimation/>

            <div style={{marginTop: "440px", marginBottom: "440px"}}>
                <DeskText/>
            </div>

            
        </div>
    );
}

export default DeskSection;
