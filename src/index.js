import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class MyCom extends Component {
  render () {
    return (
      <div>
        <App title='my first test' color='peru' />
        <App title='my second test' color='mediumaquamarine' />
        <App title='emacs is customizable' color='rebeccapurple' />
      </div>
    )
  }
}

ReactDOM.render(<MyCom />, document.getElementById('root'))
