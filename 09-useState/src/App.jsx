import React, { useState } from 'react'

const App = () => {
 
      const [num, setnum] = useState(0)
      const [name, setname] = useState("Guest User")
      const [inputName, setinputName] = useState("")

      function increaseNum(){
         setnum(num + 1)
         console.log(" increasing value by 1..", num)
      }
      function decreaseNum(){
         setnum(num - 1)
         console.log("desresing value by 1..", num)
      }
      function changeName(){
        setname(inputName || "Guest User")
      }

      return (
        <div className='dv'>
          <h1>Welcome to the useState Example</h1>
          <p>This is a simple React application demonstrating the useState hook.</p>
          <h2>Hey Buddy what is your Name😊</h2>
          <input
            id='name'
            type="text"
            placeholder='Enter your name'
            value={inputName}
            onChange={e => setinputName(e.target.value)}
          />
          <button onClick={changeName}>Hello, {name} 👋</button>

          <p>Let's take another Example</p>
          <h2>This is the value of num {num} </h2>
          <button onClick={increaseNum}>Increase value</button>
          <button onClick={decreaseNum}>Decrease value</button>
        </div>
  )
}

export default App