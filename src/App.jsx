import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Counter from './Counter'
function App() {

  return (
    <>
      <div className='container'>
     <div>  <Sidebar/></div>
     <div><MainContent/></div>
      </div>
    </>
  )
}

export default App
