import React from 'react'
import {useState} from 'react'
function ColorSwitcher() {
  const[bgcolor,setBgcolor]=useState('red');
const handleColorChange=(e)=>{
 const color=e.target.style.backgroundColor
 setBgcolor(color);
}
  return (
    <div className='color'>
<div style={{backgroundColor:bgcolor,height:"100px",color:"rgba(240, 37, 57, 1)",width:"150px",textAlign:"center",paddingTop:"50px"}}>
  {`${bgcolor}`}</div>
<div className='color_btn'>
  <button style={{backgroundColor:"blue",fontSize:"10px",borderRadius:'50%',outline:"none",border:"none",height:"25px",width:"25px"}} onClick={(e)=>{handleColorChange(e)}}> </button>
<button style={{backgroundColor:"purple",color:"blue",borderRadius:'50%',outline:"none",border:"none",height:"25px",width:"25px"}}  onClick={(e)=>{handleColorChange(e)}}> </button>
<button style={{backgroundColor:"yellow",color:"blue",borderRadius:'50%',outline:"none",border:"none",height:"25px",width:"25px"}}  onClick={(e)=>{handleColorChange(e)}}> </button>
<button style={{backgroundColor:"lightgreen",color:"blue",borderRadius:'50%',outline:"none",border:"none",height:"25px",width:"25px"}}  onClick={(e)=>{handleColorChange(e)}}> </button>
<button style={{backgroundColor:"skyblue",color:"blue",borderRadius:'50%',outline:"none",border:"none",height:"25px",width:"25px"}}  onClick={(e)=>{handleColorChange(e)}}> </button>

</div>

    </div>
  )
}

export default ColorSwitcher