import React, { useState } from "react";

export default function Textform(props) {
  // const [text, setText] = useState("Enter Text Here");
  const [text, setText] = useState("");
  // setText("this is new text"); like that we can change state of const


  const HandleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  //for uppercase
  const handleUpClick = (event) => {
    setText("You have clicked on handleUpClick");
    let Upcase = text.toUpperCase();
    setText(Upcase);
    // console.log(`Uppercase was Clicked ${text}`);
    // console.log(event)
  };


  //for lowercase
  const handleUpClickLower = (event) => {
    setText("You have clicked on handleUpClick");
    let Lowercase = text.toLowerCase();
    setText(Lowercase);
  };
  
  // clear text 
  const ClearText = (event) => {
    setText("You have clicked on handleUpClick");
    let Lowercase = "";
    setText(Lowercase);
  };

  //excercise stuff
  const CopyToClickBoard = () => {
    navigator.clipboard.writeText(text);
  };

  //Remove Extra Spaces
  const RemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    // console.log(newText)
    setText(newText.join(" "))
  }

  //reverse the string
  const Reversethestring = ()=>{
    let splitString  = text.split("");
    let reverseArray = splitString.reverse();
    let joinarray = reverseArray.join("");
    setText(joinarray)
  }


  

//jsx start

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={10}
            value={text}
            onChange={HandleOnChange}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClickLower}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={CopyToClickBoard}>Copy To click board</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={Reversethestring}>Reverse The String </button>
      </div>

      <div className="container my-3">
        <h2>Preview:</h2>
        <p>{text}</p>

        <h2>What we copy:</h2>
        <p>{text}</p>

        <h4>Your Text Summary:</h4>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        {/* here we need 1 minutes to read 125 words, so 1/25 is 0.008 , so we calculate no of words * 0.008 so we can get 
        no of minutes to read that sentence */}
        <p>
          We can read {text.split(" ").length} words in
          {text.split(" ").length * 0.008} Minutes
        </p>
      </div>
    </>
  );
}
