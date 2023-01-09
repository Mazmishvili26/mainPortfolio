import React, { useEffect, useRef } from "react";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      <div className="cursor-center"></div>
    </div>
  );
}

export default Cursor;
