import React, { Component } from 'react'
import './assets/style/normalize.css'
import './assets/style/style.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='landing' >
          <h1>MyFlix</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All</a>
        </div>
      </div>
    )
  }
}

export default App
