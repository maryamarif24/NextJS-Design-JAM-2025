"use client"; // Required for interactivity in Next.js App Router

import { useState } from "react";

const LSize = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected); 
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "30px",
        height: "30px",
        padding: "5px 12px 5px 12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        borderRadius: "5px",
        backgroundColor: isSelected ? "#FBEBB5" : "#F8EAEA",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "400",
        color: "black",
      }}
    >
      L
    </div>
  );
};

export default LSize;
