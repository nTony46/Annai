import React from "react";
import { Layout } from "../../components";
import "./upload.styles.css";

export default function Upload() {
  return (
    <Layout center>
      <img className="hero-img" src="../../No data-pana.png" />
      <input type="file"></input>
    </Layout>
  );
}
