import React from "react";
import ReactDOM from "react-dom/client";


function HelloWorld()
{
    return <h4>Hello world from Component!!</h4>;
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HelloWorld />)