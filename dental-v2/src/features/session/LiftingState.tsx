import React, { useState } from 'react'
import Child2 from './Child2'
import Child from './Child'
import TextInput from './TextInput'

function LiftingState() {

    const [count , setCount] = useState(0)

    const handleChange = () => {
       console.log("im in lifting state");
    }

  return (
    <div>
        <Child2 setCount={setCount} handleChange={handleChange}></Child2>
        <Child count={count}></Child>
        {/* <Parent setCount={}></Parent> */}
        {/* <TextInput></TextInput> */}
        {/* <TextInput></TextInput> */}
    </div>
  )
}

export default LiftingState