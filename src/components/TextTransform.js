import { useState } from "react";
import React from "react";

export default function TextTransform(props) {
  const [text, setText] = useState("");
  
  const handlechange = (e) => {
    setText(e.target.value);
  };

  const convertUpText = (e) => {
    e.preventDefault();
    if(text.trim() === ""){
      props.showAlert("Please enter some text", "warning");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const convertLowText = (e) => {
    e.preventDefault();
    if(text.trim() === ""){
      props.showAlert("Please enter some text", "warning");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  };
//   const handlecopy = (e) => {
//     e.preventDefault();
//     // var Text = document.querySelector("#exampleFormControlTextarea1");
//     // Text.select();
//     navigator.clipboard.writeText(text);
//   };
  const handlecopy = (e) => {
    e.preventDefault();
    if(text.trim() === ""){
      props.showAlert("Please enter some text", "warning");
      return;
    }
    var Text = document.querySelector("#exampleFormControlTextarea1");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const wordscheck = () => {
    if(text.trim() === "") return 0;
    return text.trim().split(/\s+/).length;
  };

  return (
    <div className={`container mt-4 ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Enter text here</label>
          <textarea
            className={`form-control mt-2 ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
            value={text}
            onChange={handlechange}
            id="exampleFormControlTextarea1"
            rows={8}
            placeholder="Enter your text here..."
          />
        </div>
        <button onClick={convertUpText} className="btn btn-primary mt-3 mx-1">
          Convert to Uppercase
        </button>
        <button onClick={convertLowText} className="btn btn-primary mt-3 mx-1">
          Convert to Lowercase
        </button>
        <button onClick={handlecopy} className="btn btn-primary mt-3 mx-1">
          Copy Text
        </button>
      </form>
      <h2 className="mt-3">Text Summary</h2>
      <p>
        {wordscheck()} words and {text.length} characters
      </p>
      <p>
        {wordscheck() * 0.008} seconds to read
      </p>
      <h3 className="preview">
        Preview
      </h3>
      <p>{text}</p>
    </div>
  );
}
