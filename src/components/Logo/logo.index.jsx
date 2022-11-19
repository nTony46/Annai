import React from "react";
import "./logo.styles.css";

export default function Logo({ lg, md, sm }) {
  const appName = "Annai";

  if (lg) {
    return <h1 className="logo logo-lg">{appName}</h1>;
  } else if (md) {
    return <h2 className="logo logo-md">{appName}</h2>;
  } else if (sm) {
    return <h3 className="logo logo-sm">{appName}</h3>;
  } else {
    return <h4 className="logo">{appName}</h4>;
  }
}
