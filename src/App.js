import React from "react";
import "./App.css";
// import Data from "./data";  
import Title from "./components/Title";
import Image from "./components/URL"; 
import Explanation from "./components/Explanation"; 
import Date from "./components/Date"; 
import Copyright from "./components/Copyright"; 

function App() {
  return (
    <div className="App">
      <p>
        <Title />
        <Image />
        <Explanation />
        <Date />
        <Copyright />
      </p>
    </div>
  );
}

export default App;
