import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Card from "./components/Card";

import "./style.css";

function App() {
  return (
    <div>
      <Nav />
      <Content />
      <Card />
    </div>
  );
}

let root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);
