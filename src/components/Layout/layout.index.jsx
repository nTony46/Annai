import React from "react";
import "./layout.styles.css";
import { Logo } from "../index";

export default function Layout({ children, hidden }) {
  return (
    <div className="container">
      <header className={`layout-header ${hidden && "hidden"}`}>
        <a className="no-text-dec" href="/">
          <Logo sm />
        </a>
      </header>
      <>{children}</>
    </div>
  );
}
