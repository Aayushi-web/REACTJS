import React, {useState} from 'react'

export default function TextForm(props){
  const handleOnChange=(event)=>{
    console.log("changed")
    setText(event.target.value)
  }
  const handleUpClick=()=>{
    console.log(" Upper case was clicked"+ text);
    let newText =text.toUpperCase();
    setText(newText)
  }
  const [text, setText]= useState ('Enter text here');
 
    return (
        <>
      
    <h1>{props.heading}</h1>  
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="10" column="10"></textarea>
</div> 
<button className='btn btn-primary' onClick={handleUpClick}>Convert 
 to upperCase</button>
        </>
    )
}
