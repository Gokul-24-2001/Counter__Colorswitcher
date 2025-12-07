import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { CiCalculator2 } from "react-icons/ci";
import { IoColorFilter } from "react-icons/io5";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='todo1'><FcTodoList/><span>ToDo</span></div>
      <div className='todo'><CiCalculator2/><span>Counter</span></div>
       <div className='todo'><IoColorFilter/><span>Color switcher</span></div>
        <div className='todo'><FcTodoList/><span>ToDo</span></div>
    </div>
  )
}

export default Sidebar