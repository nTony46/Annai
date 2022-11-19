import React from "react";
import "./layout.styles.css";
import { Logo } from "../index";

export default function Layout({ children, hidden }) {
  return (
    <div className="container">
      <header className={`layout-header ${hidden && "hidden"}`}>
        <Logo sm />
      </header>
      <>{children}</>
    </div>
  );
}
