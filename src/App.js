import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode in enable or not
  const [alert, setalert] = useState(null);
  //for different color need diff state;
  const [buttoncolor, setbuttoncolor] = useState(null)



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
      document.body.style.background = "#352164";
      document.body.style.color = "white";
      showAlert("Dark Mode Enable", "success");
      setbuttoncolor("light")
    }
    else if (mode == "dark"){
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enable", "success");
      setbuttoncolor("primary")
    }
  }



  const Red = () => {
    if (mode === "light" || "Yellow"||"Green"|| "dark" ) {
      setmode("dark");
      document.body.style.background = "#dc3545";
      document.body.style.color = "white";
      showAlert("Red mode Enable", "success");
      setbuttoncolor("warning")
    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enable", "success");
      setbuttoncolor("primary")
    }
  };

  const Yellow = () => {
    if (mode === "light"|| "Green" || "Red" || "dark") {
      setmode("dark");
      document.body.style.background = "#ffc107";
      document.body.style.color = "black";
      showAlert("Yellow mode Enable", "success");
      setbuttoncolor("danger")
    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enable", "success");
      setbuttoncolor("primary")
    }
  };

  const Green = () => {
    if (mode === "light" || "Red" || "Yellow" || "dark") {
      setmode("dark");
      document.body.style.background = "#198754";
      document.body.style.color = "black";
      showAlert("Green mode Enable", "success");
      setbuttoncolor("secondary")
    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enable", "success");
      setbuttoncolor("primary")
    }
  };

  return (
    <div>
      <Navbar
        title="UsingProp"
        about="Disabled1"
        mode={mode}
        togglemode={togglemode}
        green={Green} red={Red} yellow={Yellow}
      />
      <Alert alert={alert} showAlert={showAlert} />
      <Textform heading="Enter Text to Analyze Below" showAlert={showAlert} buttoncolor = {buttoncolor}/>
      <About />
    </div>
  );
}

export default App;
