"use client"; // Required for interactive components in Next.js App Router

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1); // Initial count is 1

  const handleIncrement = () => {
    setCount(count + 1); // Increase count by 1
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1); // Decrease count by 1
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "123px",
        height: "64px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "15px",
        paddingRight: "12px",
        gap: "35px",
        padding: "10px",
        border: "1px solid #9F9F9F",
        borderRadius: "8px",
      }}
    >
      <button
        onClick={handleDecrement}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "16px",
          cursor: count > 1 ? "pointer" : "not-allowed",
          color: count > 1 ? "black" : "#ccc",
        }}
      >
        -
      </button>
      <span style={{ fontSize: "16px", fontWeight: "500" }}>{count}</span>
      <button
        onClick={handleIncrement}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
