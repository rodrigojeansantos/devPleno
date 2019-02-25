import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import { reducer } from './reducer'
import thunk from 'redux-thunk'
import Info from './Info'

const store = createStore(reducer, applyMiddleware(thunk, logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App"></div>
        <Info />
      </Provider>
    )
  }
}

export default App
