import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [number,setNumber]=useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <div>{number}</div><div style={{display:'flex'}}>        <button onClick={()=>{setNumber(prev=>prev+1)}}>+</button>
        <button onClick={()=>{setNumber(prev=>prev-1)}}>-</button></div>

        <button onClick={()=>{setNumber(0)}}>Reset</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
