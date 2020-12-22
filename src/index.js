import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import App from './containers/App'
import 'semantic-ui-css/semantic.min.css'
import './app.css'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Пишем интернет-магазин на ReactJS + Redux #3 | 40:07
