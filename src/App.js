import React, { Component } from 'react'

class App extends Component {
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>{this.props.title.toUpperCase()}</h1>
      </div>
    )
  }
}

export default App
