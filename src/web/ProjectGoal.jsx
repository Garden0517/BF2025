import React from "react";
import ProjectGoalSwipe from "./ProjectGoalSwipe";

function ProjectGoal() {
  return (
    <div>
      {/* 슬라이드 중앙 정렬용 래퍼 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",            // 전체 화면 기준
          height: "100vh",           // 화면 세로 중앙 정렬도 포함
          boxSizing: "border-box",
          marginTop: "40px",
        }}
      >
        <ProjectGoalSwipe />
      </div>
    </div>
  );
}

export default ProjectGoal;
