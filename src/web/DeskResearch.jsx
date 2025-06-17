import React from "react";

function DeskResearch(props) {
  const { img, title, intro } = props;

  return (
    <div
      style={{
        display: "inline-flex",   
        flexDirection: "row",        
        alignItems: "center",
        backgroundColor: "#121212",
        padding: "20px 15px",
        borderRadius: "75px",
        margin: "20px",
        height: "auto",                   
        maxWidth: "100%",                 
      }}
    >
      <div
        style={{
          display: "inline-flex",   
          flexDirection: "row", 
          backgroundColor: "white",
          padding: "11px 50px 11px 14px",
          borderRadius: "75px",       
          whiteSpace: "nowrap",   
          fontFamily: "Pretendard",
          color: "black"
        }}
      >

        {/* 이미지 */}
        <img
          src={img}
          alt=""
          style={{
            display: "flex",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            backgroundColor: "#D9D9D9",
            marginRight: "16px",
          }}
        />
        <div style={{
          display:"flex",
          flexDirection: "column"
        }}>
          {title && (
            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0 0 5 0" }}>
              {title}
            </p>
          )}
          <span style={{ fontSize: "14px"}}>
            {intro}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DeskResearch;
