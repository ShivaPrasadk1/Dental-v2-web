import React from 'react'

function USeEffect1() {
    const handleClick = () => {
        console.log("button clicked");
    
    }
  return (
    <div>
        <button onClick={handleClick}>from USe effect1</button>
    </div>
  )
}

export default USeEffect1