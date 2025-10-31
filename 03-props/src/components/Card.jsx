import React from 'react'

const Card = (props) => {
    
  return (
    <div className='card'>
        <img src={props.img} alt='avatar' />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card