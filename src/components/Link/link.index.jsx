import React from "react";
import "./link.styles.css";

export default function Link({ to, text, block, invert }) {
  return (
    <a
      className={`base-style ${block && "block"} ${invert && "invert"}`}
      href={to}
    >
      <span className="text-style">{text}</span>
    </a>
  );
}
