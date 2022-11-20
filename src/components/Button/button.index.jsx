import React from "react";
import "./button.styles.css";

export default function Button({ onSubmit, text, block, type, disabled }) {
  return (
    <button
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={`base-style ${block && "block"} ${disabled && "disabled"}`}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}
