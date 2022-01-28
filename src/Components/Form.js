import React from 'react';
import { useState } from 'react';
import "./Form.css";

const Form = () => {
   const[name, setName] = useState();

   const[newName, setNewName] = useState();


  const change = (event) =>{
      setName(event.target.value)
  }

  const clicked =()=>{
     setNewName(name);
     setName( " " );
  }

  return (
  <div>
      <input value={newName}></input>
      <label>
      <div>
          <input type="text" value = {name} placeholder='Inter Name Here' onChange={change} ></input><br></br>
          <button className='subm' onClick={clicked}>Click me</button>
      </div>
      </label>
      
  </div>
  );
};

export default Form;
