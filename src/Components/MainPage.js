import React, { Component } from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class MainPage extends Component {
     render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>

                    <div className="list-books-content">
                        <BookShelf shelf='Want To Read' books={this.props.books.filter(book => book.shelf === 'wantToRead')} key={BookShelf.shelf}  changeShelf={this.props.changeShelf} currentShelf='wantToRead'/>
                        <BookShelf shelf='Currently Reading' books={this.props.books.filter(book => book.shelf === 'currentlyReading')} key={BookShelf.shelf} changeShelf={this.props.changeShelf} currentShelf='currentlyReading'/>
                        <BookShelf shelf='Read' books={this.props.books.filter(book => book.shelf === 'read')} key={BookShelf.shelf} changeShelf={this.props.changeShelf} currentShelf='read'/>
                    </div>
                </div>

                <div className="open-search">
                <Link to='/search' onClick={() => this.setState({showSearchPage: true})}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainPage