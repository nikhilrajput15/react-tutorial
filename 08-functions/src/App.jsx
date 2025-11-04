import React from 'react'

const App = () => {
  function onclicked(elem){
    console.log("button clicked",elem.detail)
  }

  const pageScrolling=(elem)=>{
    if(elem)
    console.log("page scrolling seedha...")
    else
    console.log("page scrolling ulta...")
  }

  function mouseEntered(){
    console.log("mouse entered..")
  }
  return (
    <div>
      <h1>Hello Guys</h1>
      <button onMouseEnter={mouseEntered} onClick={function(elem){
        onclicked(elem)
      }}>perform operation and see in console</button>

      <div>
        <div onMouseMove={(elem) => {
          console.log("mouse entered box",elem.clientX,elem.clientY)  
        }} className='box'></div>

        <div onWheel={(elem)=>{
          pageScrolling(elem.deltaY)
          console.log(elem.deltaY)
        }}>
          <div className='page1'></div>
          <div className='page2'></div>
          <div className='page3'></div>
        </div>
      </div>
    </div>
  )
}

export default App