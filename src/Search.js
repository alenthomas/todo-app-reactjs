import React, {Component} from 'react'

import ShowCard from './ShowCard'

import preload from './assets/data.json'

const card = (show) => {
  return (<ShowCard key={show.imdbID} {...show} />)
}

class Search extends Component {
  render () {
    return (
      <div className='search'>
        {/* <pre><code>{JSON.stringify(preload, null, 2)}</code></pre> */}
        {preload.shows.map(card)}
      </div>
    )
  }
}

export default Search
