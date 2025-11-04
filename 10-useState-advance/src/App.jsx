import React, { useState } from 'react'


const App = () => {
  const [user, setUser] = useState({name: "John", age: 19})
  const [Studying, setStudying] = useState('12th Class') 

  const btnclicked = () => {
    setUser({...user, name: "Nikhil Rajput"})
  }

  const btnclickedbyArrow = () => {
    setUser(prev=>({...prev, age:22}))
  }

  const studyingNow = () => {
    setStudying('B.Tech')
    console.log(Studying);
  }

  return (
    <div className='dv'>
      <h1>Use State Tutorial</h1>
      <h2>Update User Data by Clicking on Button</h2>
      <h2>{user.name}, {user.age} </h2>
      <button onClick={btnclicked} >Clicked Here to change user</button>
      <button onClick={btnclickedbyArrow} >Clicked Here to change user's Age</button>

      <h2>{Studying} </h2>
      <button onClick={studyingNow} >Clicked Here to change user</button>
    </div>
  )
}

export default App