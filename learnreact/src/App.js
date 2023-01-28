import logo from './logo.svg';
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
function App() {

  return (
    <>
      <Navbar title="Title"  about=" About"/>
      <div className='container my-4'>
        
        <TextForm heading="Enter your text"/></div>
    </>
  );
}

export default App;
