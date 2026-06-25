import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>👤 {props.name}</h1>
      <h3>Age: {props.age}</h3>
      <h4>Profession: {props.porf}</h4>
    </div>
  )
}

export default Card
