import React from 'react';
import {useState} from 'react';
import '../index.css'
import Sgenerator from '../middleware/Sgenerator';

// Get a length from input and call funtion with that 
function Generetor()
{
  const [value, setValue] = useState("Generate Your Password ------>", "")
  const changeName = () => {
      setValue(Sgenerator(10))
  }

  return (
    <div className="generator--box">
        <input name="passbox" id="final_pass" type="text" size="40" value= {value}/>
        <button onClick={changeName}>Generate</button>
        <button onClick={() => navigator.clipboard.writeText(value)}>Copy</button>
    </div>
    
  )
}

export default Generetor;