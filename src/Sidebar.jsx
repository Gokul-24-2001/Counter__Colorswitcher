import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { CiCalculator2 } from "react-icons/ci";
import { IoColorFilter } from "react-icons/io5";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='todo1'><a href="#todos" style={{textDecoration:"none",color:"black"}}><FcTodoList/><span>ToDo</span></a></div>
      <div className='todo'><a href="#counter" style={{textDecoration:"none"}}><CiCalculator2/><span>Counter</span></a></div>
       <div className='todo'><a href="#colorswitcher" style={{textDecoration:"none"}}><IoColorFilter/><span>Color switcher</span></a></div>
        <div className='todo'><a href="#textreverse" style={{textDecoration:"none"}}><FcTodoList/><span>ToDo</span></a></div>
    </div>
  )
}

export default Sidebar