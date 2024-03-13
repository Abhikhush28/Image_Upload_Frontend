
import "./App.css";
import React, { useState } from "react";

function App() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");
  const [photo, setPhoto] = useState();

  const changeImageHandler = (e) => {
    const file = e.target.files?.[0]
    console.log(file);  
    const reader = new FileReader();
    if(file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if(typeof  reader.result === 'string'){
          setPhotoPreview(reader.result);
          setPhoto(file);
        }
      }
    }
  }



  



  const submithandler = (e) => {
    e.preventDefault();
    console.log(e); 
  }

  return (
    <>
      <h1>Image Upload</h1>

      <form action="" onSubmit={submithandler}>
        <div style={{margin:"1rem"}}>
          <label htmlFor="Fname"> First Name: </label>
          <input type="text" id="Fname" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="lname"> Last Name: </label>
          <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="email"> Email: </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        </div>
        <div style={{margin:"1rem"}}>
          <label htmlFor="num"> Mob No: </label>
          <input type="number" id="num" value={mob} onChange={(e) => setMob(e.target.value)} maxLength={10} placeholder="Enter Mobile NUmber" />
        </div>

        <div style={{margin:"1rem"}}>
          <label htmlFor="pic"> upload Photo </label>
          <input type="file" onChange={changeImageHandler} id="pic"/>
        </div>

        <button style={{margin:"1rem"}}>Sumbit</button>
      

      </form>
    </>
  );
}

export default App;
