import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);