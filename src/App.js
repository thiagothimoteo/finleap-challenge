import React from 'react';
import { createUseStyles } from 'react-jss'
import { Provider } from 'react-redux';

import Store from './store'
import CitiesList from './components/CitiesList'
import SearchBox from './components/SearchBox'

const useStyles = createUseStyles({
  container: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: 32,
    '& > *': {
      marginBottom: 32
    }
  },
  title: {
    textAlign: 'center',
    marginBottom: 32
  }
})

const App = () => {
  const classes = useStyles()

  return (
    <Provider store={Store}>
      <div className={classes.container}>
        <h1 className={classes.title}>Weather Monster</h1>
        <SearchBox />
        <CitiesList />
      </div>
    </Provider>
  )
}

export default App;
