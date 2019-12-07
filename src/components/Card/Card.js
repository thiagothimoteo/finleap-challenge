import React from 'react'

const Card = ({name, min, max, ...rest}) => {
  return (
    <div {...rest}>
      <h2>{name}</h2>
      <div>
        <strong>Min</strong> {min}
      </div>
      <div>
        <strong>Max</strong> {max}
      </div>
    </div>
  )
}

export default Card
