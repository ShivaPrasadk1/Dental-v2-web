import React, { useEffect, useState } from 'react';

const Child = ({count}:{count:any}) => {
  
  return (
    <div>
      <h1>Child</h1>
       <h3>{count}</h3> 
    </div>
  );
  
};

export default Child;
