import React from 'react';
import '../index.css'

function GeneretorNew()
{ 
  return (
    <div className="generator--box">
        <input name="passbox" id="final_pass" type="text" size="40" value="Generate your secure password! ---------->" />
            <button type="submit">Generate</button>
            <button 
             onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}
            >
            Copy
            </button>
    </div>
    
  )
}

export default GeneretorNew;