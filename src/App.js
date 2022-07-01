import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
   const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      mes :  message,
      type : type
  });
  setTimeout(()=>{
    setalert(null)},2000
  );
  }
  const toglestate=()=>{
    if(mode==='light')
    {
    setmode("dark");
    document.body.style.backgroundColor="#0f044a";
    document.body.style.color="white";
    showAlert("Dark Mode is Enabled","success");
    }
    else
    {
    setmode("light");
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showAlert("Dark Mode is Disabled","success");
    }
  }
  const [mode,setmode]=useState("light");
  return (
    <>
    <Navbar title="Textutils" mode={mode} toglestate={toglestate} />
    <Alert alert={alert}/>
    <div className='container my-3'>
      <TextForm showAlert={showAlert} heading="Enter the text  to analyze below "/> 
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
