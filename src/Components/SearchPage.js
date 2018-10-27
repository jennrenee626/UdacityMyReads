import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({query})
        this.getSearchedBooks(query)
    }

    getSearchedBooks = (query) => { 
        //error resource: Walkthrough by Maeva
        if(query) { 
          BooksAPI.search(query).then((searchedBooks) => {
                if(searchedBooks.error){
                    this.setState({searchedBooks: []})
                    alert("No books found from this search criteria.")
                } else {
                    this.setState({searchedBooks})
                }
          })
        } else {
            this.setState({searchedBooks: []})
        }
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
                <ol className="books-grid">
                    {this.state.searchedBooks.map(searchedBooks => {
                        let shelf="none"; //shelf default and map resource: Walkthrough by Maeva
                        this.props.books.map(book => ( book.id === searchedBooks.id ? shelf=book.shelf : ''))
                        return (
                            <li key={searchedBooks.id}>
                                <Book book={searchedBooks} changeShelf={this.props.changeShelf} currentShelf={shelf}/>
                            </li>
                        )
                    })}
                </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage