import "./App.css";
import Alert from "./components/Alert";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been anabeled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been anabeled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Pahari"
        aboutText="About Pahari"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
      </div>
      <About mode={mode} />
    </>
  );
}

export default App;
