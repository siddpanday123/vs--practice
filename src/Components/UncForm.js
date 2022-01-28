import { useRef, useState } from "react";
import React from 'react';


const UncForm = () => {

    const input = useRef(null);
    const[data, setData] = useState(false);
     
    const submit =(e )=>{
      e.preventDefault();
      const name = input.current.value;
      name === "" ? alert("plz fill name") : setData(true)
    }
    
   
    return (
        <div>
           <form onSubmit={submit}>
               <label htmlFor='input'>
               <h1>
                   Hii Siddharth  dooing good.
               </h1>
               <input type="text" id='input' ref={input} placeholder="Inter Your Name"></input>
               </label><br/>
               <button>Click Me</button>
               <h2>{data ? `Your Name is ${input.current.value}` : " "} </h2>
           </form>
        </div>
        );
    };
    
    export default UncForm;
    