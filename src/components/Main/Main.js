import React from 'react';
import './Main.css'
import colorNames from 'colornames'

const Main = ({addColor,setAddColor,hexValue,setHexValue,textColor,setTextColor}) => {
  
  return (
    <main>
      <div className ="box"
        style ={{
            backgroundColor : addColor,
            color :textColor ? "black" : "white"
        }}
      >
        <p>{addColor ? addColor : "Empty Value"}</p>
        <p>{hexValue}</p>
      </div>
      <form className ="colorForm" 
        onSubmit ={(e) => e.preventDefault()}
      >
        <label htmlFor ="addColor" className="addColorLabel">Add color</label>
        <input 
          type ="text"
          autoFocus
          className = "input-text"
          id ="addColor"
          placeholder ="Add color"
          value ={addColor}
          onChange = {(event) => {
            setAddColor(event.target.value);
            setHexValue(colorNames(event.target.value));
          }}
        ></input>
      </form>
      <button className="toggleTextBtn"
        onClick = {() => setTextColor(!textColor)}
      >Toggle Text color</button>
    </main>
  )
}

export default Main;