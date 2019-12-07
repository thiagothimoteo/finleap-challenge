import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from "react-redux";

const useStyles = createUseStyles({
  card: {
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 4,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'box-shadow .3s',
    '&:hover': {
      boxShadow: '0 0 20px #ddd'
    }
  }
})

const City = ({id, name, min, max, ...rest}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
      type: 'REMOVE_CITY',
      cityID: id
    })
  }

  return (
    <div className={classes.card} {...rest} onClick={handleClick}>
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

export default City
