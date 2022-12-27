import React from 'react';
import {useState} from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import Sgenerator from '../middleware/Sgenerator';

// Get a length from input and call funtion with that 
function Generator()
{
  const [value, setValue] = useState("Wanna generate a password? ------>", "");
  const [input, setInput] = useState(8);
  const changeName = () => {

      setValue(Sgenerator(input));
  }

  return (
    
    <div className="generator--box">
        <b>Choose Password Length</b><p></p>
        <RangeSlider
          className='slider'
          value={input}
          onChange={changeEvent => setInput(changeEvent.target.value)}
          tooltipPlacement='top'
          tooltip= 'on'
          min = '8'
          max = '20'
          />
        <input name="passbox" id="final_pass" type="text" size="40" value= {value}/>
        <Button variant="primary" onClick={changeName}>Generate</Button>
        <Button variant="primary" onClick={() => navigator.clipboard.writeText(value)}>Copy</Button>
    </div>
    
  )
}

export default Generator;