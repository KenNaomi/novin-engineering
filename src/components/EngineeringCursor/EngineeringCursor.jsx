import { useEffect, useRef } from "react";
import "./EngineeringCursor.css";

export default function EngineeringCursor() {

  const cursor = useRef(null);

  useEffect(() => {

    const move = (e) => {
      if (cursor.current) {
        cursor.current.style.left = e.clientX + "px";
        cursor.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);


  return (
    <div ref={cursor} className="engineering-cursor">
      <span></span>
    </div>
  );
}