import React, { useState, useRef, useEffect } from "react";

function DraggableImage({ src, width = 2400, height = 2400 }) {
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(1);
  const startPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPos.current = {
      x: e.clientX - dragPos.x,
      y: e.clientY - dragPos.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragPos({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const zoomSpeed = 0.1;

      setScale((prev) => {
        const next = delta > 0 ? prev - zoomSpeed : prev + zoomSpeed;
        return Math.min(3, Math.max(0.5, next));
      });
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      style={{
        maxWidth: "1560px",
        aspectRatio: "1000 / 1205", // 키오스크 비율 유지
        width: "52vw",
        position: "relative",
      }}
    >
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "55%",
          height: "76%",
          overflow: "hidden",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          zIndex: 1,
        }}
      >
        <img
          src={src}
          alt="드래그 이미지"
          draggable={false}
          style={{
            position: "absolute",
            width: `${width}px`,
            height: `${height}px`,
            transform: `translate(${dragPos.x}px, ${dragPos.y}px) scale(${scale})`,
            transformOrigin: "center",
            transition: isDragging ? "none" : "transform 0.2s ease-out",
            objectFit: "cover",
            pointerEvents: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default DraggableImage;
