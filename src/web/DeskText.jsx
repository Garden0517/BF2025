import React from "react";

function DeskText() {
    return (
        <div style={{
            background: "#212121",
            display  : "flex",
            flexDirection: "row",
            alignItems: "center",         // 가로 중앙
            justifyContent: "center",     // 세로 중앙
            height: "675px"
            }}>
            <div style={{ width: "340px", padding: "30px", borderRight: "1px solid white"}}>
                <h4 style={styles.h4}>시각적 직관성 부족</h4>
                <p style={styles.p}>텍스트 중심과 추상적인 아이콘, 복잡한 메뉴 구조로 인해 초보자와 고령자가 기능을 쉽게 파악하기 어렵습니다.</p>
            </div>
            <div style={{ width: "340px", padding: "30px", borderRight: "1px solid white"}}>
                <h4 style={styles.h4}>심리적 압박감</h4>
                <p style={styles.p}>사회적 시선과 빠른 조작 속도에 대한 부담으로 인해 키오스크 사용을 포기하거나 회피하는 경향이 나타납니다.</p>
            </div>
            <div style={{ width: "340px", padding: "30px", borderRight: "1px solid white"}}>
                <h4 style={styles.h4}>과도한 정보 단계</h4>
                <p style={styles.p}>길고 복잡한 주문 흐름은 인지 피로를 유발하며, 처음 사용하는 사용자에게는 매우 길고 어렵게 느껴집니다.</p>
            </div>
            <div style={{ width: "340px", padding: "30px", borderRight: "1px solid rgba(0, 0, 0, 0)"}}>
                <h4 style={styles.h4}>고정된 화면 구조</h4>
                <p style={styles.p}>화면 높이 조절이 불가능해 휠체어 사용자, 초등학생 등 신체 조건에 따라 조작이 어려운 경우가 많습니다</p>
            </div>
            </div>
    )
}

const styles = {
    h4: {
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "15px"
    },
    p: {
        fontSize: "20px",
        fontWeight: "Medium",
    }
}
export default DeskText