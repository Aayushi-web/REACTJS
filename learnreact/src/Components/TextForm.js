import React, {useState} from 'react'

export default function TextForm(props){
  const handleOnChange=(event)=>{
    console.log("changed")
    setText(event.target.value)
  }
  const Click=()=>{
    let newText1 =text;
    setText(newText1)
  }
  const handleUpClick=()=>{
    console.log(" Upper case was clicked"+ text);
    
    let newText =text.toUpperCase();
    setText(newText)
  }
  const [text, setText]= useState ('Enter text here');
 
    return (
        <>
      <div className='container'>
    <h1>{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="10" column="10"></textarea>
</div> 
<button className='btn btn-primary' onClick={handleUpClick}>Convert 
 to upperCase</button></div>
 <div className='container my-3'>
  <h1 >Your text summery</h1>
  <p>{text.split(" ").length} words and {text.length}characters</p>
  <p>{0.008*text.split(" ").length} minutes read</p>
  <button className='btn btn-primary' onClick={Click}
   >
   preview</button>  
  
   
  
 </div>
        </>
    )
}
