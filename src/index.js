import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";

console.log("test2");

let seconds = 60;
let count = 0;

function chrono() {
    seconds = seconds - 1;
    count = count + 1;
    const elementSeconds = <p>{seconds}</p>;
    ReactDOM.render(elementSeconds, document.querySelector(".hour"));
}
setInterval(chrono, 1000);
