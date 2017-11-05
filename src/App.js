import React, { Component } from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Landing from './Landing'
import Search from './Search'

import './assets/style/normalize.css'
import './assets/style/style.css'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </HashRouter>

    )
  }
}

export default App
