import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Result, Root, Upload } from "./routes";
import reportWebVitals from "./reportWebVitals";
require("typeface-poppins");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "upload",
    element: <Upload />,
  },
  {
    path: "result",
    element: <Result />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
