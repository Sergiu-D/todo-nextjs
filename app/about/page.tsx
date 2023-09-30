"use client";
import { useState } from "react";

const btnStyles = {
  padding: ".3rem 1rem",
  border: "1px solid #fff",
  borderRadius: "5px",
  fontSize: "18px",
};

export default function Info() {
  const [count, setCount] = useState(0);

  const handleStateChange = (direction: string) =>
    (direction === "up" && setCount((prev) => prev + 1)) ||
    (direction === "down" && setCount((prev) => prev - 1));
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "6rem",
        gap: "2rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{count}</div>
        <div style={{ display: "flex" }}>
          <button style={btnStyles} onClick={() => handleStateChange("up")}>
            +
          </button>
          <button style={btnStyles} onClick={() => handleStateChange("down")}>
            -
          </button>
        </div>
      </div>
    </main>
  );
}
