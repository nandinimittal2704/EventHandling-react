import React, { useState } from "react";

function App() {
  const [click, setClicked] = useState("Hello");
  const [hover, setHover] = useState(false);
  const [name, setName] = useState("");
  const [submit, setSubmitted] = useState("");

  function handleClicked() {
    setClicked("Submitted");
  }
  function mouseoverHandle() {
    setHover(true);
  }
  function mouseoutHandle() {
    setHover(false);
  }
  function getValue(event) {
    setName(event.target.value);
  }

  function submitedButton() {
    setSubmitted(name);
  }
  return (
    <div className="container">
      <h1>hello {submit}</h1>
      <input onChange={getValue} type="text" placeholder="What's your name?" />
      <button
        style={{
          background: hover ? "white" : "black",
          color: hover ? "black" : "white",
        }}
        onClick={submitedButton}
        onMouseOver={mouseoverHandle}
        onMouseOut={mouseoutHandle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
