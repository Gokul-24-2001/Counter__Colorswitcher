import React from 'react'
import Todos from './Todos'
import ColorSwitcher from './ColorSwitcher'
import Counter from './Counter'
import Textreverse from './Textreverse'
function MainContent() {
  return (
    <div>
        <section className="todos" id="todos">
        <Todos/>
        </section>
           <section className="todos" id="colorswitcher">
           <ColorSwitcher/>
        </section>
           <section className="todos" id="counter">
        <Counter/>
        </section>
      
           <section className="todos" id="textreverse">
      <Textreverse />
        </section>
    </div>
  )
}

export default MainContent