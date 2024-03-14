import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success")
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success")
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = ('');
    setText(newText);
    props.showAlert("Text cleared", "success")
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleCopy = () =>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied", "success")
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra spaces", "success")
  }
  const colorRed = () =>{
    document.body.style.backgroundColor = 'red';
  }


  const [text, setText] = useState("");

  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1"  onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1"  onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1"  onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1"  onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button type="button" className="btn btn-danger mx-1 my-1"  onClick={colorRed}>Red</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes need to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div>
    </>
  );
}
