import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light"); //whether dark mode in enable or not
  const [alert, setalert] = useState(null)
  //for different color need diff state;
  const [buttoncolor, setbuttoncolor] = useState("primary");
  //setting up font color for different themes
  const [bodyfontcolor, setbodyfontcolor] = useState("black")

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    // if we dont setup timeout for our warning , then is begin a bug.
    // we want to reslove this bug, then use this timeout
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  //light mode and dark mode logic
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      setbodyfontcolor("white")
      document.body.style.background = "#352164";
      showAlert("Dark Mode❤ Enable", "success"); //we can change title dyanamically
      setbuttoncolor("light");
      document.title = "TextUtils-Dark Mode❤";

      // setInterval(() => {
        //   document.title = "TextUtils-Dark Mode❤";
      // }, 1500);

      // setInterval(() => {
      //   document.title = "Textile-Home";
      // }, 1000);

    } else{
      setmode("light");
      setbodyfontcolor("black")
      document.body.style.background = "white";
      showAlert("Light Mode Enable", "success");
      setbuttoncolor("primary");
    }
  };

  const Red = () => {
    if (mode === "light"||"yellow"||"green") {
      setmode("Red");
      document.body.style.background = "#dc3545";
      // document.body.style.color = "white";
      setbodyfontcolor("black")
      showAlert("Red mode Enable", "success");
      setbuttoncolor("warning");
    } 
  }

  const Yellow = () => {
    if (mode === "light"||"red"||"green") {
      setmode("Yellow");
      document.body.style.background = "#ffc107";
      // document.body.style.color = "black";
      setbodyfontcolor("black")
      showAlert("Yellow mode Enable", "success");
      setbuttoncolor("danger");
    } 
  };

  const Green = () => {
    if (mode === "light"||"Yellow"||"Red") {
      setmode("Green");
      document.body.style.background = "#198754";
      // document.body.style.color = "white";
      setbodyfontcolor("white")
      showAlert("Green mode Enable", "success");
      setbuttoncolor("secondary");
    } 

  };

  return (
    <div>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          about="Disabled1"
          togglemode={togglemode}
          green={Green}
          red={Red}
          yellow={Yellow}
          mode={mode}
        />
        <Alert alert={alert} showAlert={showAlert} />
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}

          {/* <Route exact path="/"> */}
          <Textform heading="Enter Text to Analyze Below" showAlert={showAlert} buttoncolor={buttoncolor} bodyfontcolor={bodyfontcolor} />
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
