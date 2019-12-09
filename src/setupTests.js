import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

const renderWithRedux = ( ui, {
  initialState,
  store = createStore(rootReducer, initialState, applyMiddleware(thunk))
} = {}) => {
  return {
    ...render(
      <Provider store={store}>
        {ui}
      </Provider>),
    store,
  }
}

export { renderWithRedux }
