import React, {Component} from 'react'

import imgs from './images'
import {string, shape} from 'prop-types'

class ShowCard extends Component {
  render () {
    const {poster, title, year, description} = this.props.show
    return (
      <div className='show-card'>
        <img src={imgs[poster]} alt={poster} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

ShowCard.propTypes = {
  show: shape({
    poster: string,
    title: string.isRequired,
    year: string,
    description: string
  })
}
export default ShowCard
