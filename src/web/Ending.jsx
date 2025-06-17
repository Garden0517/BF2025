import React from "react";
import "./Style.css";
import useFadeInOnScroll from "./useFadeInOnScroll"; // import 추가

import EndImg from "../img/EndImg.png"
import Logo from "../img/Logo.png";

function Ending() {
    const [ref, visible] = useFadeInOnScroll(); // 훅 호출

    return (
        <div>
            <div ref={ref} className={`fade-init ${visible ? "fade-up" : ""}`}>
                {/* 마무리 글 */}
                <div className="label" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100vh", // 전체 화면 기준 중앙 정렬
                    width: "100%",
                }}>
                    <p className="text-wrapper" style={{
                        fontSize: "64px",
                        fontWeight: "bold",
                        margin: "0px",
                        whiteSpace: "pre-line", // \n 줄바꿈 적용 가능
                    }}>
                        누구도 소외되지 않는 디지털 환경{"\n"}
                        배리어프리 키오스크에서 시작합니다.
                    </p>
                </div>
                {/* 마무리 글 */}
            </div>

            {/* 마무리 사진 */}
            <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100vh", // 혹은 원하는 고정 높이
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
            }} >
                {/* 배경 이미지 */}
                <img src={EndImg} alt="" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 배경 꽉 차게
                    zIndex: 0,
                }}/>

                {/* 위에 떠 있는 내용 */}
                <div style={{
                    position: "absolute",
                    zIndex: 1,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <img src={Logo} alt="로고" style={{
                        width: "470px",
                        marginBottom: "20px",
                    }} />
                    <p style={{
                        fontSize: "45px",
                        fontWeight: "bold",
                        color: "white", // 배경이 어두우면 가독성 좋게
                    }} >
                        베스트 프렌드 같은 배리어프리 키오스크
                    </p>
                </div>
            </div>
            {/* 마무리 사진 */}

            {/* 마무리 화면 (각 모서리 글 있는 화면) */}
                <div
                    style={{
                        position: "relative",
                        height: "100vh",
                        width: "100%",
                        backgroundColor: "#1C1C1C", // 어두운 배경
                        color: "white",
                        fontSize: "18px",
                        lineHeight: 1.6,
                        padding: "90px 180px", // 여백
                        boxSizing: "border-box",
                    }}
                    >
                    {/* 좌상단 */}
                    <div style={{
                        position: "absolute",
                        top: "90px",
                        left: "180px"
                        }}>
                            <p>
                                kiosk design <br />
                                Barrier-Free System
                            </p>
                    </div>

                    {/* 우상단 */}
                    <div style={{
                        position: "absolute",
                        top: "90px",
                        right: "180px",
                        textAlign: "right",
                        }}
                    >
                        <p>더 많은 사람을 위한 키오스크 디자인</p>
                    </div>

                    {/* 좌하단 */}
                    <div style={{
                        position: "absolute",
                        bottom: "90px",
                        left: "180px",
                        }}
                    >
                        <p>
                        Digital Media Design <br />
                        Kaywon University of Art & Design
                        </p>
                    </div>

                    {/* 우하단 (로고) */}
                    <div style={{
                        position: "absolute",
                        bottom: "90px",
                        right: "180px",
                        }}
                    >
                        <img
                        src={Logo}
                        alt="로고"
                        style={{
                            width: "90px",
                        }}
                        />
                    </div>
                </div>
            {/* 마무리 화면 (각 모서리 글 있는 화면) */}
        </div>
    )
}

export default Ending