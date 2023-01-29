import React, {useState} from 'react'

export default function TextForm(props){
  const handleOnChange=(event)=>{
    console.log("changed")
    setText(event.target.value)
  }
 
  const handleLoClick=()=>{
    console.log("lowercase cliked");
    let lower= text.toLowerCase();
    setText(lower)
  }
  const handleUpClick=()=>{
    console.log(" Upper case was clicked"+ text);
    
    let newText =text.toUpperCase();
    setText(newText)
  }
  const reset=()=>{
    console.log("reset");
    
    let newText =" ";
    setText(newText)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  
  const [text, setText]= useState ('');
 
    return (
        <>
      <div className='container'>
    <h1>{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{}}id="my-box" rows="10" column="10"></textarea>
</div> 
<button className='btn btn-primary mx-5' onClick={handleUpClick}>Convert 
 to upperCase</button>
 <button className='btn btn-primary' onClick={handleLoClick}>Convert 
 to LowerCase</button>
 <button className='btn btn-outline-primary mx-3' onClick={reset}>reset</button>
 </div>
 <div className='container my-3'>
  <h1 >Your text summery</h1>
  <p>{text.split(" ").length} words and {text.length}characters</p>
  <p>{0.008*text.split(" ").length} minutes read</p>
<h2>preview</h2>

<p>{text}</p>
<button className='btn btn-outline-primary mx-3' onClick={speak}>speak</button>
   
  
 </div>
        </>
    )
}
