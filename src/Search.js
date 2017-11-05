import React, {Component} from 'react'

import preload from './assets/data.json'
import imgs from './images'

const showTitle = (show) => {
  return (
    <div className='show-card'>
      <img src={imgs[show.poster]} alt={show.poster} />
      <div>
        <h3>{show.title}</h3>
        <h4>({show.year})</h4>
        <p>{show.description}</p>
      </div>
    </div>
  )
}

class Search extends Component {
  render () {
    return (
      <div className='search'>
        {/* <pre><code>{JSON.stringify(preload, null, 2)}</code></pre> */}
        {preload.shows.map(showTitle)}
      </div>
    )
  }
}

export default Search
