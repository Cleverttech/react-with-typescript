import React, { useState } from 'react';
import Project from './components/Project'


import './App.css';

function App() {
  const [number, setNumber] = useState<number>(1) 

  const onClickButtonAdd = () => {
  const newNumber = number+ 1
   setNumber(newNumber)

  }
  const onClickButtonSub = () => {
    const newNumber = number -1
     setNumber(newNumber)

    }
 
  return (
    <div className="App">
     <button onClick={()=>onClickButtonAdd()}>Add</button>
     <button onClick={()=>onClickButtonSub()}>Subtract</button>
     <p>Result is: {number}</p>

    <Project />
    </div>
  );
}

export default App;
