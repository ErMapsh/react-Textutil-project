import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="UsingProp" about="Disabled1" />
      {/* <Navbar/> default poperty getting */}
      <Textform heading="Enter Text to Analyze Below"/>
    </>
  );
}

export default App;
