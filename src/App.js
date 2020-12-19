import React from "react";
import './App.css';
function App(){
  const sayHello=()=>{
    console.log("Hello");
  }
 
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={sayHello}>hello</button>
    </div>
  );
}


export default App;