import React, { useEffect, useState } from 'react';

const UseEffects = () => {
  const [count, setCount] = useState(0);

  // Effect for componentDidMount and componentWillUnmount
  useEffect(() => {
    // This code runs once after the component mounts
    console.log('Component did mount');

    return () => {
      // This code runs once before the component unmounts
      localStorage.setItem('count', count.toString());
    };
  }, []); // Empty dependency array

  // Effect for componentDidUpdate
  useEffect(() => {
    // This code runs after every render where `count` has changed
    console.log('Count updated:', count);
  }, [count]); // Dependency array with `count`

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffects;
