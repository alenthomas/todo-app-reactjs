import React, { Component } from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Landing from './Landing'

import './assets/style/normalize.css'
import './assets/style/style.css'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Route path='/' component={Landing} />
        </div>
      </HashRouter>

    )
  }
}

export default App
