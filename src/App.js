import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode in enable or not

  //light mode and dark mode logic
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#352164";
      document.body.style.color = "white";

    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar title="UsingProp" about="Disabled1" mode={mode} togglemode={togglemode}/>
      <Textform heading="Enter Text to Analyze Below" />
      <About/>
    </div>
  );
}

export default App;
