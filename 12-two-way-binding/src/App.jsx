import React from 'react'

const App = () => {
 
  const [name, setName] = React.useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted by ...',e.target.username.value)
    setName('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" name="username" placeholder="Enter your name"
        value={name} onChange={(e)=>{
          setName(e.target.value);
        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App