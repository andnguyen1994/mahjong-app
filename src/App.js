import React, { Component } from 'react'
import Main from 'components/Main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RootReducer from 'reducers/index'

const store = createStore(RootReducer)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App
