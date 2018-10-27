import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
//import './App.css'

class SearchPage extends Component {
    state = {query: ''}

    updateQuery = (query) => {
        this.setState({
            query:query
        })
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" 
                        value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchPage