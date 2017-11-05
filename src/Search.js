import React, {Component} from 'react'

import ShowCard from './ShowCard'

import preload from './assets/data.json'

const card = (show) => {
  return (<ShowCard key={show.imdbID} {...show} />)
}

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {searchTerm: 'this is the default string'}
  }

  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input onChange={this.handleSearchTermChange.bind(this)} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        <div className='search'>
          {preload.shows.map(card)}
        </div>
      </div>
    )
  }
}

export default Search
