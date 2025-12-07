import React from 'react'
import Todos from './Todos'
import ColorSwitcher from './ColorSwitcher'
import Counter from './Counter'
import Textreverse from './Textreverse'
function MainContent() {
  return (
    <div className=''>
        <section id="todos">
        <Todos/>
        </section>
           <section id="todos">
           <ColorSwitcher/>
        </section>
           <section id="todos">
        <Counter/>
        </section>
      
           <section id="todos">
      <Textreverse />
        </section>
    </div>
  )
}

export default MainContent