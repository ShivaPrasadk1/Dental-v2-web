import React, { useState } from 'react'

function TextInput() {
    const [text, setText] = useState('')
  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <h1>{text}</h1>
    </div>
  )
}

export default TextInput