import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode in enable or not
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{
    setalert({
        msg: message,
        type: type
      })

      // if we dont setup timeout for our warning , then is begin a bug. 
      // we want to reslove this bug, then use this timeout
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }

  //light mode and dark mode logic
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#352164";
      document.body.style.color = "white";
      showAlert("Dark Mode Enable", "success")
    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enable", "success")
    }
  };

  return (
    <div>
      <Navbar title="UsingProp" about="Disabled1" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} showAlert={showAlert}/>
      <Textform heading="Enter Text to Analyze Below" showAlert={showAlert}/>
      <About/>
    </div>
  );
}

export default App;
