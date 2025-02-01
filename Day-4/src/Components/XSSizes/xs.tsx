"use client"; // Required for interactivity in Next.js App Router

import { useState } from "react";

const SelectableDiv = () => {
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
        padding: "5px 7px 5px 7px",
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
      XS
    </div>
  );
};

export default SelectableDiv;
