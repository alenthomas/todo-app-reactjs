import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Landing extends Component {
  render () {
    return (
      <div className='landing' >
        <h1>MyFlix</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'> Browse All </Link>
      </div>
    )
  }
}

export default Landing
