
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    setAge(age);
  };
  
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ color: "black" }}
      />
      <br/><br/>
      <button onClick={calculateAge} style={{backgroundColor: "Blue", color: "white" }}>
        Calculate Age
      </button>
      <p style={{ color: "black" }}>Your are {age} years old</p>
    </div>
  );
};
export default App;