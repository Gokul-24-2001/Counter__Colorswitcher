import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Counter() {
  const[increment,setIncrement]=useState(0);
  const[ans,setAns]=useState(4);
  
    useEffect(()=>{
  // setIncrement((prev)=>prev+1)
setAns((p)=>p*2);
    },[])
    const handleIncre=()=>{
      setIncrement((prev)=>prev+1)
    }
    const handledecre=()=>{
      
            setIncrement((prev)=>prev-1)

    }
    const reset=()=>{
      setIncrement(0);
    }
    console.log(increment)
  return (
    <div className="increment">
      <div><h1>{increment} ..</h1></div>
       <div className='i-d-r-btn'>
        <button type='button' className="increment-btn"onClick={()=>handleIncre()}>Increment</button>
        <button type='button' className="increment-btn" onClick={()=>handledecre()} disabled={increment<=0} >
        Decrement</button>
         <button type='button' className="increment-btn" onClick={()=>reset()}>Reset</button>
</div> 

</div>
  )
}

export default Counter