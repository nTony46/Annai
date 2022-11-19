import React from "react";
import "./button.styles.css";

export default function Button({ onSubmit, text, block }) {
  return (
    <button
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={`base-style ${block && "block"}`}
    >
      {text}
    </button>
  );
}
