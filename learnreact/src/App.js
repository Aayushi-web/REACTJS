import logo from './logo.svg';
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import About   from './Components/About';
import { useState } from 'react';
function App() {
 const [mode, setMode]=  useState('light'); //wheather dark mode  enable or not
 const toggleMode=()=>{
  if(mode=== "light"){
    setMode("dark")
    document.body.style.backgroundColor="black"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
  }
 }
  return (
    <>
      <Navbar title="Title" mode={mode} toggleMode={toggleMode} />
      <div className='container my-4'>
        
        <TextForm heading="Enter your text"/></div>
        <About/>
    </>
  );
}

export default App;
