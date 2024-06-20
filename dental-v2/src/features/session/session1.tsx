import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../utils/api/session';
import Useeffect from './Useeffect';
import { Navigate } from 'react-router';
import Parent from './Child2';

function Session1() {

  const [age, setAge] = useState(0);
  const [todo, setTodo] = useState('');
  const [obj1, setObj1] = useState({ name: 'shiva', age: 25 })
  const newFun = (a: number = 0) => {
    return a;
  }
  const [fun, setfun] = useState(newFun)



  // focus the input field

  useEffect(() => {
    document.getElementById('input')?.focus();
  }, [])

  // const obj1 ={
  //   name:'shiva',
  //   age:25
  // }


  var obj: any = {
    name: 'shiva',
    age: 25
  }
  const [user, setUser] = useState(obj);
const [count ,setCount] = useState(0);


  const handleObject = () => {
    console.log("sasdhk");
    setCount(count+1);
    
    return Math.random();
    // obj.name = 'shiva kumar';
  }
  useEffect(() => {
    console.log("Age changed");
    // alert('one changed'); // compountent did update , compountent did mount , compountent will unmount
    return () => {
      // alert('two changed'); // compountent will unmount , compountent did mount 
      getAllUsers().then((data) => { console.log(data) });
    }
  }, [])


  return (
    <>
     {/* <Parent></Parent> */}
    </>
  );
}

export default Session1