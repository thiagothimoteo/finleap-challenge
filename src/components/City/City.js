import React from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from "react-redux";

const useStyles = createUseStyles({
  cityCard: {
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 4,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'box-shadow .3s',
    '&:hover': {
      boxShadow: '0 0 20px #ddd'
    },
    '& > *:not(:last-child)': {
      marginBottom: 32
    }
  },
  cityCardDetails: {
    display: 'block',
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
    <div className={classes.cityCard} {...rest} onClick={handleClick}>
      <h2>{name}</h2>
      <div className={classes.cityCardDetails}>
        <strong>Min</strong> {min}
      </div>
      <div className={classes.cityCardDetails}>
        <strong>Max</strong> {max}
      </div>
    </div>
  )
}

export default City
