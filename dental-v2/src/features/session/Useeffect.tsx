import React, { useEffect, useState } from 'react'
import USeEffect1 from './USeEffect1';

function Useeffect() {
  const [obj1,setObj1] = useState({name:'shiva',age:25})

  const normalObj = {
    name:'shiva',
    age:25
  }
  
  useEffect(() => {
   console.log("component");
  },[<USeEffect1 />])

  const clickable = () => {
    normalObj.name = 'shiva kumar';
    // obj1.name = 'shiva kumar';
    // console.log(obj1);
  }

  return (
    <div>
        <h1>Useeffect</h1>

        <button onClick={clickable}>change todo</button>
        <USeEffect1 />
    </div>
  )
}

export default Useeffect