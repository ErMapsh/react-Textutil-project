import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Text Here");
  // setText("this is new text"); like that we can change state of const

  const handleUpClick = (event) => {
    setText("You have clicked on handleUpClick");
    let Upcase = text.toUpperCase();
    setText(Upcase);
    // console.log(`Uppercase was Clicked ${text}`);
    // console.log(event)
  };

  const HandleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={10} value={text} onChange={HandleOnChange}/>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
