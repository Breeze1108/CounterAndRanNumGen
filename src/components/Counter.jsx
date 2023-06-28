import { useEffect, useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);
    let [randNum, setRandNum] = useState(0);
    

       useEffect(()=>{
        setCount (count + 1 ); },[])
       useEffect(()=>{
        setCount (count - 1 ); },[])
       useEffect(()=>{
         setCount (count = 0 ); },[])

        return(
        <div>
            <h1>{count}</h1>
            <button onClick={() =>setCount (count - 1)}>-</button>
            <button onClick={() =>setCount (count * 0)}>reset</button>
            <button onClick={() =>setCount (count + 1)}>+</button>
            <button onClick={() => setCount ((Math.random() * 9999999) + 1)}>?</button>
        </div>
    )
  }
  export default Counter