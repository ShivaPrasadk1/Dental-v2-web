import React, { useState } from 'react';

const Child2 = ({setCount,handleChange,}:{setCount:any,handleChange:any}) => {

  const handleFun1=()=>{
    console.log("im in child2");
  }

  return (
    <div>
      <button onClick={()=>setCount((pre: number)=>pre+1)}>Increase</button>
      <button onClick={handleChange}>click</button>
    </div>
  );
};

export default Child2;
