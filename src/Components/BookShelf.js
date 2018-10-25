import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class BookShelf extends Component {
    state= {}

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => book.shelf === book.shelf) //resource credit - walkthrough by Maeva NAP
                        .map(book => (
                            <li key={book.id}>
                                <Book book={book} changeShelf={this.props.changeShelf}/> 
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf