import React from "react";

function ServiceText() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "100px"
        }}>
            <p style={{fontSize: "26px", fontWeight: "bold", marginBottom: "60px"}}>Service</p>
            <p style={{fontSize: "64px", fontWeight: "bold", margin: "0px"}}>간편한 주문, 원하는 방식으로 시작하세요.</p>
        </div>
    )
}

export default ServiceText