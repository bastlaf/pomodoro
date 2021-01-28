import React from "react";
import {render} from "react-dom";
import "./scss/app.scss";

console.log("test2");

class HelloMessage extends React.Component {
    render() {
        return <div>{`Hello ${this.props.name}`}</div>;
    }
}

render(
    <HelloMessage name={"Taylor"} />,
    document.querySelector("#hello-example"),
);
