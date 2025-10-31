import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Nikhil'img='https://avatars.githubusercontent.com/u/9919?s=200&v=4'/>
      <Card user='Nikhil' img='https://images.unsplash.com/photo-1761839257946-4616bcfafec7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000'/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App