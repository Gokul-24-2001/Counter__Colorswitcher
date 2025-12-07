import React from 'react'
import { useState } from 'react'
function Todos() {
    const [task,setTask]=useState('');
   const [tasks,setTasks]=useState([]);
   const handleChange=(e)=>{
   setTask(e.target.value)
   }
   const handleSubmit=()=>{
    setTasks((prev)=>{
 return [...prev,{text:task,strike:false}]
    })
    setTask('');
   console.log(tasks);

   }
   const deleteTasks=(index)=>{
const newData=tasks.filter((item,i)=>{
return index!==i
}
)
setTasks(newData)
//  console.log(newData);
   }
  
    const toggleCheckbox = (index) => {
    const updated = tasks.map((item, i) =>
      i === index ? { ...item, strike: !item.strike } : item
    );
    setTasks(updated);
   }
   console.log(tasks,)
  return (
    <div className='task'>
        <h4>My Tasks</h4>
       <div className='input'>
        <input type='text'  name="task" value={task}  onChange={handleChange}placeholder='Enter Your Task name'/>
        <button type='submit' onClick={handleSubmit}> Add</button></div> 
        {
          tasks.map((item,index)=>{
            return(
              <ul className='list'>
                <input style={{marginLeft:"10px"}}type="checkbox"checked={item.strike}  onChange={()=>{toggleCheckbox(index)}}value={item.text} />
                <li style={{textDecoration:item.strike?"line-through":"none"}}>{item.text}</li>
                <button type="button" onClick={()=>deleteTasks(index)}>Delete</button>
              </ul>
            )
          })
        }

    </div>
  )
}

export default Todos