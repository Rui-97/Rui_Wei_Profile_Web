import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
