import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./pages/HomePage";
import "./App.css";
import BusResults from "./pages/BusResults";

function App() {
  // const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_BASE_URL);
  // console.log(import.meta.env.REACT_APP_BASE_URL);
  return (
    <>
      {/* <HomePage /> */}
      <BusResults />
    </>
  );
}

export default App;
