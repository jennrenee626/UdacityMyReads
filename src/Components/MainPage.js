import React, { Component } from 'react'
//import * as BooksAPI from './BooksAPI'
import BookShelf from "./BookShelf";

class MainPage extends Component {
    state= {}

    render() {
        console.log(this.props.books)
        return (
            <div>
                <div className="list-books">
                
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>

                    <div className="list-books-content">
                        <BookShelf shelf='Want To Read' books={this.props.books.filter(book => book.shelf === 'wantToRead')}/>
                        <BookShelf shelf='Currently Reading' books={this.props.books.filter(book => book.shelf === 'currentlyReading')}/>
                        <BookShelf shelf='Read' books={this.props.books.filter(book => book.shelf === 'read')}/>        
                    </div>
                </div>

                <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default MainPage