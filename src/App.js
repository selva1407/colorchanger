import './App.css';
import Main from './components/Main/Main.js';
import { useState } from 'react';

function App() {
  
  
  const [addColor,setAddColor] = useState("");
  const [hexValue,setHexValue] = useState("");
  const [textColor, setTextColor] = useState(true);
  
  
  return (
    <div className="App">
      <Main 
        addColor ={addColor}
        setAddColor ={setAddColor}
        hexValue = {hexValue}
        setHexValue = {setHexValue}
        textColor = {textColor}
        setTextColor = {setTextColor}
      />
    </div>
  );
}

export default App;
