/* global it */
import React from 'react'
import ReactDOM from 'react-dom'
import MyCom from './index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyCom />, div)
})
