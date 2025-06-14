

import React from 'react'

const Speeck = () => {
    const handleClick=()=>{
        const inp=document.getElementById('inp')
        speechSynthesis.speak(new SpeechSynthesisUtterance(inp))
    }
  return (
    <div id='wrapper'>
      <input id='inp' type='text' placeholder='enter some thing'/>
      <button id='btn' onClick={handleClick}>Speeck</button>
    </div>
  )
}

export default Speeck
