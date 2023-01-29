import logo from './logo.svg';
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import About   from './Components/About';
function App() {

  return (
    <>
      <Navbar title="Title"  about=" About"/>
      <div className='container my-4'>
        
        <TextForm heading="Enter your text"/></div>
        <About/>
    </>
  );
}

export default App;
