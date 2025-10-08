import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id:"title",
        key:1
    },
    "This is title of page !!"
);

const heading2 = React.createElement(
    "h2",
    {
        id:"heading",
        key:2
    },
    "This is heading 2!!"
)


const sect = React.createElement(
    "div",
    {id:"section"},
    [heading,heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(sect);