import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Image Upload</h1>

      <form action="">
        <div style={{margin:"1rem"}}>
          <label htmlFor="Fname"> First Name: </label>
          <input type="text" id="Fname" placeholder="Enter First Name" />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="lname"> Last Name: </label>
          <input type="text" id="lname" placeholder="Enter Last Name" />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="email"> Email: </label>
          <input type="email" id="email" placeholder="Enter Email" />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="num"> Mob No: </label>
          <input type="number" id="num" maxLength={10} placeholder="Enter Mobile NUmber" />
        </div>

        <div style={{margin:"1rem"}}>
          <label htmlFor="pic"> upload Photo </label>
          <input type="file" id="pic"/>
        </div>

        <button style={{margin:"1rem"}}>Sumbit</button>
      

      </form>
    </>
  );
}

export default App;
