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
        <header>
          <h1>MyFlix</h1>
          <input type='text' placeholder='Search' />
        </header>
        <div className='search'>
          {preload.shows.map(card)}
        </div>
      </div>
    )
  }
}

export default Search
