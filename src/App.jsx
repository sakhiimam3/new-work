import logo from './logo.svg';
import './App.css';
import React ,{useState} from "react"

function App() {
   const [counter,setcounter]=useState(0)
    const increment=()=>setcounter(counter +  1)
    const decrement=()=>setcounter(counter - 1)
  return (
    <div className="App">
                    <button onClick={increment}>+</button> <br/>
                      <span>{counter}</span> <br/>
                    <button onClick={decrement}>-</button> 
    </div>
  );
}

export default App;
