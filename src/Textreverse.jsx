import React from 'react'
import { useState } from 'react'
function Textreverse() {
  const [text, setText] = useState('');
  const [revtext, setRevText] = useState([]);
  const reverse = (text) => {
    let rev = text.length;
    let res = ""
    for (let i = rev - 1; i >= 0; i--) {
      res += text[i]

    }
    setRevText((prev)=>[...prev,res]);
    setText('');
    console.log(rev, res);

  }
  const deleteText=(index)=>{
    let removetext=revtext.filter((item,i)=>{
      return i!==index;
    })
    setRevText(removetext);
  }
  return (

    <div className='reverse'>
    <div>
      <input type="text" name="name" value={text} placeholder="Enter your text" onChange={(e) => setText(e.target.value)} />
       <h3>{text}</h3>
      </div>  
    <div> 
      <button className='rev_btn' type="submit" onClick={() => reverse(text)}>Reverse</button>
                  { 
            revtext.map((item,index)=>{
              return (
              
<ul>
  <li style={{display:"flex",gap:"10px"}}>
    <h4>{item}</h4>
    <button className="del" type="button" onClick={()=>deleteText(index)}>Delete</button>
  </li>
</ul>
     ) })}


      </div> 
    </div>
  )
}

export default Textreverse