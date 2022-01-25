import React, {useState} from 'react';
import './App.css';

const App = () => {

const [date, setDate] = useState()



 const dateSubmit = (e)=>{

  let newdate  = setDate(date);

  

  let wdate =  newdate.toLocaleDateString("en-US");
  
 console.log(wdate);

 }
  return( 
  <div className='app'>
    <input type="date" value={date}></input>
    <button className='subm' onClick={dateSubmit}> Submit</button>
  </div>);
};

export default App;
